const express = require("express");
const app = express();

const { router } = require("./src/routers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3030, () => {
  console.log("Pub server runing at port", 3030);
});









// const eventTarget = new EventTarget();

// app.set("key", ()=>{})
// app.get("key")