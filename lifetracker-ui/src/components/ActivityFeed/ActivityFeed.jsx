import React from 'react'
import "./ActivityFeed.css"

const ActivityFeed = ({ totalCaloriesPerDay, avgCaloriesPerCategory }) => {
  return (
    <div className="activity-feed">
        ActivityFeed
        <div className="per-category">
            <h4> Average Calories Per Category </h4>
        </div>

        <div className="per-day">
            <h4> Total Calories Per Day </h4>
        </div>
    </div>
  )
}

export default ActivityFeed