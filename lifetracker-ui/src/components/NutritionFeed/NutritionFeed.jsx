import React from 'react'
import "./NutritionFeed.css"
import NutritionCard from "../NutritionCard/NutritionCard.jsx"

const NutritionFeed = ({ nutritions }) => {
  return (
    <div className="nutrition-feed">
        NutritionFeed
        {!nutritions 
        ? <h3> Nothing here yet </h3> 
        : nutritions.map((item) => {
            <NutritionCard/>
        })}
    </div>
  )
}

export default NutritionFeed