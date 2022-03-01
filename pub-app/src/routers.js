const router = require("express").Router();
const { redisPublish } = require("./redis");

router.get("/", async (req, res) => {
  const user = {
    id: "123456",
    name: "Davis",
  };

  await redisPublish(user);
  res.send("Publish one event");
});

module.exports = { router };
