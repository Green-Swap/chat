const express = require("express");
const socketio = require("socket.io");
const app = express();
const server = require("http").createServer(app);
const connexionService = require("./services/connexion");
const messageRouter = require("./routers/message");
const cors = require("cors");
require("dotenv").config();

const io = socketio(server);
const PORT = process.env.PORT || 3000;

connexionService.getConnection();

const passServer = (req, res, next) => {
  req.server = server;
  next();
};

app.use(function (req, res, next) {
  const allowedOrigins = [
    "http://localhost:5173",
    "null",
    "*",
    "http://localhost",
    "http://156.67.217.63",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", "true");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, mail, token"
  );
  next();
});

app.use(express.static("public"));
app.use(express.json());
app.use("/messages", passServer, messageRouter);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
