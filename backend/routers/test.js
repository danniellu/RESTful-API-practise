const express = require("express");
const router = express.Router();
const connection = require("../connect");

router.get("/", async (req, res) => {
  let data = await connection.queryAsync("SELECT * FROM member");
  console.log("member", data);
  res.json(data);
});

module.exports = router;
