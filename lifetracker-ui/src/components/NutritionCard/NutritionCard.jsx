import React from 'react'
import "./NutritionCard.css"

const NutritionCard = ({ nutrition, imageurl, name, calories, category, createdat }) => {
  return (
    <div className="nutrition-card">
        NutritionCard
        <p className="nutrition-name"> {nutrition} </p>
        {/* <p className="nutrition-image">  </p> */}
        <p className="nutrition-calories"> {calories} </p>
        <p className="nutrition-category"> {category} </p>
        <p className="nutrition-date"> {createdat} </p>

    </div>
  )
}

export default NutritionCard