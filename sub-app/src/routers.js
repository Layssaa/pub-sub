const router = require("express").Router();
const { sendToChat } = require("./chat");
const { messageChat } = require("./messages");

const sendMessage = async (req, res) => {
  const { user, message } = req.body;
  const time = new Date().toString();

  try {
    await sendToChat({ user, message, time });
    res.send({ message: "Message sent" });
  } catch (error) {
    console.log(error);
    res.send(error.nessage).status(200);
  }
};

router.get("/", (req, res) => {
  res.send("subscriber two");
});

router.post("/send-message", sendMessage);

module.exports = { router };
