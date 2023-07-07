import React from 'react'
import "./SummaryStat.css"

const SummaryStat = ({ stat, label, substat }) => {
  return (
    <div className="summary-stat">
        <div className="primary-statistic"> </div>
        <div className="stat-label"> </div>
        <div className="secondary-statistic"> </div>
    </div>
  )
}

export default SummaryStat