const express = require("express");
const router = express.Router();
const db = require("../db");
const security = require("../middleware/security");
const Activity = require("../models/activity");

router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const avgCalories = await Activity.fetchAvgCalories(id);
    return res.status(200).json({ avgCalories });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
