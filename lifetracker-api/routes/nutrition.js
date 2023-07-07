const express = require("express");
const router = express.Router();
const db = require("../db");
const security = require("../middleware/security");
const Nutrition = require("../models/nutrition");

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const nutrition = await Nutrition.createNutrition(req.body);
    console.log(nutrition);

    return res.status(201).json({
      message: "Nutrition row added successfully",
      nutrition: nutrition,
    });
  } catch (error) {
    console.error("Error adding nutrition row: ", error);
    res.status(500).json({ message: "Error adding nutrition row: " });
    next(error);
  }
});

module.exports = router;
