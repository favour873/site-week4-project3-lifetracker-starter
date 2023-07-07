import React from 'react'
import "./NutritionPage.css"
import NotFound from '../NotFound/NotFound'
import NutritionOverview from '../NutritionOverview/NutritionOverview'
import NutritionNew from '../NutritionNew/NutritionNew'
import NutritionDetail from "../NutritionDetail/NutritionDetail"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


const NutritionPage = ({ appState, setAppState }) => {
  return (
    <div className="nutrition-page">NutritionPage
      {/* <Router>
        <Routes>
          <Route to="/nutrition" element={<NutritionOverview/>}/>
          <Route to="/nutrition/create" element={<NutritionNew/>}/>
          <Route to="/nutrition/id/:nutritionId" element={<NutritionDetail/>}/>
          <Route to="*" element={<NotFound/>}/>
        </Routes>


      </Router> */}


    </div>
  )
}

export default NutritionPage