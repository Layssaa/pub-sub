const redis = require("ioredis");
const redisClient = redis.createClient();
let messageChat = [];

const subChannelNotify = async () => {
  return await redisClient.subscribe("notify-servers");
};

const subChannelChat = async () => {
  return await redisClient.subscribe("chat-message");
};

redisClient.on("message", (channel, message) => {
  console.log(JSON.parse(message).message);
  return messageChat.push(JSON.parse(message));
});

module.exports = {
  subChannelNotify,
  subChannelChat,
};
