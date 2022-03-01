const express = require("express");

const { router } = require("./src/routers");


// const eventTarget = new EventTarget();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.set("key", ()=>{})
// app.get("key")

app.use(router);

app.listen(3030, () => {
  console.log("Pub server runing at port", 3030);
});
