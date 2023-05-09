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

connexionService.connexion();

const passServer = (req, res, next) => {
  req.server = server;
  next();
};
app.use(cors());
app.options("*", cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Origin", "*");
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
