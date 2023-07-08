import React from "react";
import "./ActivityPage.css";
import ActivityFeed from "../ActivityFeed/ActivityFeed";

const ActivityPage = ({ userId, onGet, avgCalories }) => {
  return (
    <div className="activity-page">
      <ActivityFeed userId={userId} avgCalories={avgCalories} onGet={onGet} />
    </div>
  );
};

export default ActivityPage;
