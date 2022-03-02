const express = require("express");
const app = express();

const { subChannelNotify, subChannelChat } = require("./src/messages");
const { router } = require("./src/routers");
const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("received-notify", () => {
  subChannelNotify();
  subChannelChat();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

eventEmitter.emit("received-notify");

app.listen(3000, () => {
  console.log("SUB FIRST server runing at port", 3000);
});
