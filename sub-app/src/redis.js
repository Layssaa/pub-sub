const redis = require("ioredis");

const redisClient = redis.createClient();

const subChannelNotify = async () => {
  return await redisClient.subscribe("notify-servers");
};

const subChannelChat = async () => {
  return await redisClient.subscribe("chat-message");
};

redisClient.on("message", (channel, message) => {
  console.log("Received data :" + message);
});

module.exports = {
  subChannelNotify,
  subChannelChat,
};
