const redis = require("ioredis");

const redisClient = redis.createClient();

const redisPublish = async (data) => {
  console.log("Send notification!");
  console.log(data);

  await redisClient.publish("user-notify", JSON.stringify(data));
};


module.exports = {
  redisClient,
  redisPublish
}