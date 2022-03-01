const redis = require("ioredis");

const redisClient = redis.createClient();

const redisSubscribe = async () => {
  return await redisClient.subscribe("notify-servers");
};

redisClient.on("message", (channel, message) => {
  console.log("Received data :" + message);
});

module.exports = {
  redisClient,
  redisSubscribe,
};
