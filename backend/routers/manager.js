const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Activity } = require("../models");
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("登入");
  res.json({ message: "ok" });
});

router.post("/activity", async (req, res) => {
  // create new activity
  let activitys = {};
  try {
    await Activity.create({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      name: req.body.name,
      issuer: req.body.issuer,
      number: req.body.number,
    });
    activitys = await Activity.findAll();
  } catch (error) {
    console.error(error);
  }
  res.json({
    error: 0,
    message: "create OK",
    data: activitys,
  });
});

router.delete("/activity/all", async (req, res) => {
  // delete all activity
  let activitys = {};
  try {
    await Activity.destroy({
      where: {},
    });
    activitys = await Activity.findAll();
  } catch (error) {
    console.error(error);
  }
  res.json({
    error: 0,
    message: "deleteAll OK",
    data: activitys,
  });
});

router.delete("/activity/:id", async (req, res) => {
  // delete specific activity
  let activitys = {};
  try {
    await Activity.destroy({
      where: { id: req.params.id },
    });
    activitys = await Activity.findAll();
  } catch (error) {
    console.error(error);
  }
  res.json({
    error: 0,
    message: "deleteOne OK",
    data: activitys,
  });
});

router.put("/activity/:id", async (req, res) => {
  // update specific activity
  try {
    await Activity.update(
      {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        name: req.body.name,
        issuer: req.body.issuer,
        number: req.body.number,
      },
      { where: { id: req.params.id } }
    );
  } catch (error) {
    console.error(error);
  }
  res.json({
    error: 0,
    message: "update OK",
  });
});

module.exports = router;
