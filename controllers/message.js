const Message = require("../models/message");
const socketio = require("socket.io");

exports.post = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://10.31.33.10:5174");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  const io = socketio(req.server);
  const { mail_from, mail_to, message } = req.body;
  const date = new Date();
  const newMessage = new Message({ mail_from, mail_to, message, date });

  if (!mail_from || !mail_to || !message) {
    return res
      .status(400)
      .send("Invalid request. Missing mail_from, mail_to, or message field.");
  }

  if (!/\S+@\S+\.\S+/.test(mail_from) || !/\S+@\S+\.\S+/.test(mail_to)) {
    return res.status(400).send("Invalid request. Invalid email format.");
  }
  console.log("newmessage =", newMessage);
  newMessage
    .save()
    .then((savedMessage) => {
      io.emit("chat message", savedMessage);
      console.log("Message saved" + savedMessage);
      res.status(200).send("Message saved");
    })
    .catch((err) => {
      console.log(`Error saving message: ${err}`);
      res.status(500).send("Error saving message");
    });
};

exports.get = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://10.31.33.10:5174");
  res.set("Access-Control-Allow-Methods", "GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  const { mail } = req.query;

  try {
    const messages = await Message.find(
      {
        mail,
        mail_from: { $ne: null },
        mail_to: { $ne: null },
        message: { $ne: null },
        date: { $ne: null },
      },
      { mail_from: 1, mail_to: 1, message: 1, date: 1, _id: 0 }
    ).exec();
    const messagesWithDates = messages.map((message) => ({
      ...message.toObject(),
      date: new Date(message.date),
    }));

    console.log(`Found ${messages.length} messages`);
    res.status(200).send(messagesWithDates);
  } catch (err) {
    console.log(`Error finding messages: ${err}`);
    res.status(500).send("Error finding messages");
  }
};
