const express = require("express");
const app = express();

const { EventEmitter } = require("events");

const { subChannelNotify, subChannelChat } = require("./src/redis");
const { router } = require("./src/routers");

const eventEmitter = new EventEmitter();

eventEmitter.on("received-notify", () => {
  subChannelNotify();
  subChannelChat();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

eventEmitter.emit("received-notify");

app.listen(3006, () => {
  console.log("SUB SECOND server runing at port", 3006);
});
