var myHeaders = new Headers();
myHeaders.append(
  "token",
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsInVzZXJNYWlsIjoiY2FtaWxsZS50b3Vyb24ucHJvQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJleHAiOjE2ODM3MTIwMTB9.qfM8iHCdT9CMZ7RwiZWmjh37Zmo7O8MJKBqG8LsBX4I"
);
myHeaders.append("mail", "camille.touron.pro@gmail.com");
var raw = JSON.stringify({
  mail_from: "camille.touron.pro@gmail.com",
  mail_to: "camille.touron.pro@gmail.com",
  message: "Hello, Bob!",
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
  mode: "cors",
};

fetch("http://156.67.217.63:3000/messages", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
