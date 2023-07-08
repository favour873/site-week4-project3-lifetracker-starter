const express = require("express");
const router = express.Router();
const db = require("../db");
const security = require("../middleware/security");
const Nutrition = require("../models/nutrition");

router.post("/", async (req, res, next) => {
  try {
    const nutrition = await Nutrition.createNutrition(req.body);

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

router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    // console.log(req);
    const userNutritionData = await Nutrition.fetchNutritionById(id);
    // console.log(userNutritionData);
    return res.status(200).json({ userNutritionData });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
