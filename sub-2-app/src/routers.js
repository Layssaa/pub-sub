const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("subscriber one");
});

module.exports = { router };
