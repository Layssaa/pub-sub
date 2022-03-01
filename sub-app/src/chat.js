const redis = require("ioredis");
const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();
const ChatRedisClient = redis.createClient();

const sendMessage = async (_message) => {
  await ChatRedisClient.publish("chat-message", JSON.stringify(_message));
};

eventEmitter.on("send-message", sendMessage);

module.exports = {
  async sendToChat(_message) {
    eventEmitter.emit("send-message", _message);
  },
};
