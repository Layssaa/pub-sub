const express = require("express");
const { EventEmitter } = require("events");

const { redisSubscribe } = require("./src/redis");
const { router } = require("./src/routers");

const eventEmitter = new EventEmitter();

eventEmitter.on("received-notify", redisSubscribe);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

eventEmitter.emit("received-notify");

app.listen(3006, () => {
  console.log("SUB SECOND server runing at port", 3006);
});
