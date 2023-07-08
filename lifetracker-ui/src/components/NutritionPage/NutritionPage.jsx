import React, { useState } from "react";
import "./NutritionPage.css";
import NotFound from "../NotFound/NotFound";
import NutritionOverview from "../NutritionOverview/NutritionOverview";
import NutritionNew from "../NutritionNew/NutritionNew";
import NutritionDetail from "../NutritionDetail/NutritionDetail";
import NutritionFeed from "../NutritionFeed/NutritionFeed";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NutritionForm from "../NutritionForm/NutritionForm";

const NutritionPage = ({
  userId,
  username,
  nutritiondata,
  onSubmit,
  onGet,
  appState,
  setAppState,
}) => {
  const [form, setForm] = useState({});

  const formHandler = async (formData) => {
    const newForm = await formData;

    setForm(newForm);
  };

  return (
    <div className="nutrition-page">
      <div className="nutrition-form">
        <NutritionForm
          onSubmit={onSubmit}
          formHandler={formHandler}
          form={form}
        />
      </div>

      <div className="nutrition-feed">
        {nutritiondata && (
          <NutritionFeed
            userId={userId}
            nutritiondata={nutritiondata}
            onGet={onGet}
            form={form}
          />
        )}
      </div>

      {/* <Router>
        <Routes>
          <Route to="/nutrition" element={<NutritionOverview/>}/>
          <Route to="/nutrition/create" element={<NutritionNew/>}/>
          <Route to="/nutrition/id/:nutritionId" element={<NutritionDetail/>}/>
          <Route to="*" element={<NotFound/>}/>
        </Routes>


      </Router> */}
    </div>
  );
};

export default NutritionPage;
