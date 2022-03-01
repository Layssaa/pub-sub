const express = require("express");
const { redisSubscribe } = require("./src/redis");
const { router } = require("./src/routers");
const { EventEmitter } = require("events");

const app = express();
const eventEmitter = new EventEmitter();
eventEmitter.on("received-notify", redisSubscribe);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

eventEmitter.emit("received-notify");

app.listen(3000, () => {
  console.log("SUB FIRST server runing at port", 3000);
});
