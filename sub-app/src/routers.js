const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("subscriber two");
});

module.exports = { router };
