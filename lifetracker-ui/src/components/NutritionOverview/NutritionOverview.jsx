import React from "react"
import Loading from "../Loading/Loading"
import NutritionFeed from "../NutritionFeed/NutritionFeed"
import "./NutritionOverview.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


const NutritionOverview = ({ appState, setAppState, error, isLoading }) => {
    return (
        <div className="nutrition-overview">
            <Link to="/nutrition/create"> Record Nutrition </Link>
            {error && <p className="error"> {error}</p>}
            {isLoading ? <Loading/> : <NutritionFeed />}
        </div>
    )
}

export default NutritionOverview
