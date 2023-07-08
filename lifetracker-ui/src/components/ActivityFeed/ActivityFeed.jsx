import React, { useEffect } from "react";
import "./ActivityFeed.css";

const ActivityFeed = ({ onGet, userId, totalCaloriesPerDay, avgCalories }) => {
  useEffect(() => {
    onGet(userId);
  }, [userId]);

  return (
    <div className="activity-feed">
      <h1> Activity Feed </h1>
      <div className="per-category">
        {avgCalories ? (
          <>
            {" "}
            <h3 className="activity-calories">
              {" "}
              Average Calories: <br></br> {Number(avgCalories).toFixed(2)}{" "}
            </h3>{" "}
          </>
        ) : (
          <h3 className="actvity-no-data"> No Nutrition (Calories) Data Yet</h3>
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;
