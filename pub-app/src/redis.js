const redis = require("ioredis");
const { EventEmitter } = require("events");

const redisClient = redis.createClient();

const eventEmitter = new EventEmitter();

redisClient.on("error", (err) => {
  console.log(err);
});

const redisPublish = async (data) => {
  console.log("Send notification!");
  console.log(data);

  await redisClient.publish("notify-servers", JSON.stringify(data));
};

eventEmitter.on("send-notify", redisPublish);

module.exports = {
  redisClient,
  redisPublish,
  async eventEmit(data) {
    console.log(data);
    eventEmitter.emit("send-notify", data);
  },
};
