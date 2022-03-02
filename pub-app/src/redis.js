const redis = require("ioredis");
const { EventEmitter } = require("events");

const redisClient = redis.createClient();

const eventEmitter = new EventEmitter();

redisClient.on("error", (err) => {
  console.log(err);
});

const redisPublish = async (data) => {
  await redisClient.publish("notify-servers", JSON.stringify(data));
};

eventEmitter.on("send-notify", redisPublish);

module.exports = {
  redisClient,
  redisPublish,
  async eventEmit(_message) {
    eventEmitter.emit("send-notify", _message);
  },
};
