const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  mail_from: String,
  mail_to: String,
  message: String,
  date: Date,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
