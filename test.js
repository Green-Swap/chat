var data = JSON.stringify({
  mail_from: "camille.touron.pro@gmail.com",
  mail_to: "camille.touron.pro@gmail.com",
  message: "Hello, Bob!",
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:3000/messages");
xhr.setRequestHeader(
  "token",
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsInVzZXJNYWlsIjoiY2FtaWxsZS50b3Vyb24ucHJvQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJleHAiOjE2ODM3MTIwMTB9.qfM8iHCdT9CMZ7RwiZWmjh37Zmo7O8MJKBqG8LsBX4I"
);
xhr.setRequestHeader("mail", "camille.touron.pro@gmail.com");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
//156.67.217.63
var myHeaders = new Headers();
myHeaders.append(
  "token",
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsInVzZXJNYWlsIjoiY2FtaWxsZS50b3Vyb24ucHJvQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJleHAiOjE2ODM3MTIwMTB9.qfM8iHCdT9CMZ7RwiZWmjh37Zmo7O8MJKBqG8LsBX4I"
);
myHeaders.append("mail", "camille.touron.pro@gmail.com");
myHeaders.append("Content-Type", "application/json");

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
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
var data = JSON.stringify({
  mail_from: "camille.touron.pro@gmail.com",
  mail_to: "camille.touron.pro@gmail.com",
  message: "Hello, Bob!",
});

var xhr1 = new XMLHttpRequest();
xhr1.withCredentials = true;

xhr1.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr1.open("POST", "http://156.67.217.63:3000/messages");
xhr1.setRequestHeader(
  "token",
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsInVzZXJNYWlsIjoiY2FtaWxsZS50b3Vyb24ucHJvQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJleHAiOjE2ODM3MTIwMTB9.qfM8iHCdT9CMZ7RwiZWmjh37Zmo7O8MJKBqG8LsBX4I"
);
xhr1.setRequestHeader("mail", "camille.touron.pro@gmail.com");
xhr1.setRequestHeader("Content-Type", "application/json");

xhr1.send(data);
//https://mybrowseraddon.com/access-control-allow-origin.html?v=0.1.8&type=install
