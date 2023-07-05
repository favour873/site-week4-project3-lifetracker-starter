const express = require("express")
const db = require("../db")
const {BadRequestError, UnauthorizedError, NotFoundError} = require("../utils/errors")

class Nutrition {
    static async createNutrition(values) {
        const requiredFields = ["name", "quantity", "category", "calories", "imageurl"]

        requiredFields.forEach((field) => {
            if (!values.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        const result = await db.query (`
            INSERT INTO nutrition (
                name,
                quantity,
                category,
                calories,
                imageurl
            )`
        )
    }

    static async fetchNutritionById(id) {
        if (!id) {
            throw new BadRequestError("No ID provided")
        }
        let query = `SELECT * FROM nutrition WHERE id = $1`
        const result = await db.query(query, [id])
        
        if (!instance) {
            throw new NotFoundError(`No nutrition info with that ID`)
        }
        const instance = result.rows[0]
        return instance

    }
}

module.exports = Nutrition