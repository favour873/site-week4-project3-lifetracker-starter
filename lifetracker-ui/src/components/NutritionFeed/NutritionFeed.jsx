import React, { useEffect } from "react";
import "./NutritionFeed.css";
import NutritionCard from "../NutritionCard/NutritionCard.jsx";

const NutritionFeed = ({ userId, onGet, nutritiondata, form }) => {
  useEffect(() => {
    onGet(userId);
  }, [userId, form]);

  return (
    <div className="nutrition-feed">
      {!nutritiondata ? (
        <h1> Nothing here yet </h1>
      ) : (
        nutritiondata.map((nutritionobject) => (
          <div className="card">
            <NutritionCard
              key={nutritionobject.id}
              nutritionobject={nutritionobject}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default NutritionFeed;
