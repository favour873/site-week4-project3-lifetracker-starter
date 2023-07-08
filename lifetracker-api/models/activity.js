const express = require("express");
const db = require("../db");
const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
} = require("../utils/errors");

class Activity {
  static async fetchAvgCalories(id) {
    if (!id) {
      throw new BadRequestError("No ID provided");
    }
    let query = `SELECT AVG(calories) FROM nutrition WHERE userid = $1`;
    const userCalories = await db.query(query, [id]);
    const instance = userCalories.rows[0];

    if (!instance) {
      throw new NotFoundError(`No nutrition info with that ID`);
    }

    return instance;
  }
}

module.exports = Activity;
