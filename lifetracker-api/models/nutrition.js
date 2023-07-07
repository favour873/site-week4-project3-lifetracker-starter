const express = require("express");
const db = require("../db");
const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
} = require("../utils/errors");

class Nutrition {
  static async createNutrition(values) {
    const requiredFields = [
      "name",
      "quantity",
      "category",
      "calories",
      "imageurl",
      "userId",
    ];

    requiredFields.forEach((field) => {
      if (!values.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });

    const result = await db.query(
      `
            INSERT INTO nutrition (
                name,
                quantity,
                category,
                calories,
                imageurl,
                userid
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, name, quantity, category, calories, imageurl, userid, createdat;
            `,
      [
        values.name,
        values.quantity,
        values.category,
        values.calories,
        values.imageurl,
        values.userId,
      ]
    );

    const nutrition = result.rows[0];
    return nutrition;
  }

  static async fetchNutritionById(id) {
    if (!id) {
      throw new BadRequestError("No ID provided");
    }
    let query = `SELECT * FROM nutrition WHERE id = $1`;
    const result = await db.query(query, [id]);

    if (!instance) {
      throw new NotFoundError(`No nutrition info with that ID`);
    }
    const instance = result.rows[0];
    return instance;
  }
}

// const test = async () => {
//     result = await Nutrition.createNutrition({"name" : "favour", "quantity" : 1 , "category" : "cat1", "calories" : 200 , "imageurl" : "www.google.com"})
//     console.log(result)
// }

// test()

module.exports = Nutrition;
