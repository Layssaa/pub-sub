const redis = require("ioredis");

const redisClient = redis.createClient();

redisClient.on("message", (channel, message) => {
  console.log("Received data :" + message);
});

const redisSubscribe = async () => {
  console.log('get data');
  return await redisClient.subscribe("user-notify");
};

module.exports = {
  redisClient,
  redisSubscribe,
};
