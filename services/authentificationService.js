const axios = require("axios");
const API_URI =
  process.env.API_URI || "http://localhost:8080/greenswap/user/token";
exports.tokenVerification = async (req, res, next) => {
  let mail = req.headers.mail;
  let token = req.headers.token;
  let data = JSON.stringify({
    mail: mail,
    token: token,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: API_URI,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  axios
    .request(config)
    .then((response) => {
      next();
    })
    .catch((error) => {
      console.log(error);
      res.status(401).json({ message: "Token invalid." });
    });
};
