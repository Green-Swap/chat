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
