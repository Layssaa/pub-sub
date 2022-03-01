const express = require("express");
const { redisSubscribe } = require("./src/redis");
const { router } = require("./src/routers");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

redisSubscribe();

app.listen(3006, () => {
  console.log("SUB SECOND server runing at port", 3006);
});
