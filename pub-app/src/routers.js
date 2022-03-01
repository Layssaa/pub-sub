const router = require("express").Router();
const { eventEmit } = require("./redis");

router.post("/send", async (req, res) => {
  const { user, message } = req.body;
  const time = new Date().toString();

  try {
    await eventEmit({ user, message, time });
    res.send("Publish one event");
  } catch (error) {
    console.log(error);
    res.send(error.nessage).status(200);
  }
});

module.exports = { router };
