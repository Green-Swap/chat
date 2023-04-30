const axios = require("axios");

exports.tokenVerification = async (req, res, next) => {
  console.log("coucou");
  let mail = req.headers.mail;
  let token = req.headers.token;
  let data = JSON.stringify({
    mail: mail,
    token: token,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8080/greenswap/user/token",
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
