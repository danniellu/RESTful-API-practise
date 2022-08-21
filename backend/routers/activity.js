const express = require("express");
const router = express.Router();
const { Activity } = require("../models");

router.get("/list", async (req, res) => {
  // get activity list data
  let activitys = {};
  try {
    activitys = await Activity.findAll();
  } catch (error) {
    console.error(error);
  }
  res.json({
    error: 0,
    message: "findAll OK",
    data: activitys,
  });
});

router.get(":id/content", (req, res) => {
  // get content from activity by id
});

module.exports = router;
