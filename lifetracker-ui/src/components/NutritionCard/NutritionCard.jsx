import React from "react";
import "./NutritionCard.css";

const NutritionCard = ({ nutritionobject }) => {
  const formattedDate = new Date(nutritionobject.createdat);
  return (
    <div className="nutrition-card">
      <div className="nutrition-img">
        <img src={nutritionobject.imageurl} />
      </div>

      <div className="nutrition-container">
        <h1 className="nutrition-name"> {nutritionobject.name} </h1>
        <h3 className="nutrition-calories">
          {" "}
          Calories: {nutritionobject.calories}{" "}
        </h3>
        <h3 className="nutrition-category">
          {" "}
          Category: {nutritionobject.category}{" "}
        </h3>
        <h3 className="nutrition-quantity">
          {" "}
          Quantity: {nutritionobject.quantity}{" "}
        </h3>
        <p className="nutrition-date"> {formattedDate.toString()} </p>
      </div>
    </div>
  );
};

export default NutritionCard;
