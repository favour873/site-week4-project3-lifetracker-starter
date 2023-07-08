import React from "react";
import "./NutritionForm.css";
import { useState } from "react";

const NutritionForm = ({ userId, onSubmit, formHandler, form }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      name: name,
      quantity: quantity,
      calories: calories,
      imageurl: imageurl,
      category: category,
    };

    formHandler(form);

    onSubmit(form);

    formHandler({});
  };

  return (
    <div className="nutrition-form">
      <form onSubmit={handleSubmit}>
        <h3> Log Your Nutrition Data </h3>
        <label> Name: </label>
        <input
          className="form-input"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label> Calories: </label>
        <input
          className="form-input"
          name="calories"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        ></input>

        <label> Quantity: </label>
        <input
          className="form-input"
          name="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>

        <label> ImageURL: </label>
        <input
          className="form-input"
          name="imageurl"
          type="text"
          value={imageurl}
          onChange={(e) => setImageUrl(e.target.value)}
        ></input>

        <label> Category: </label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option> Select an option </option>
          <option value="Snack">Snack</option>
          <option value="Beverage">Beverage</option>
          <option value="Food">Food</option>
        </select>

        <button className="submit-nutrition" type="submit">
          {" "}
          Save{" "}
        </button>
      </form>
    </div>
  );
};

export default NutritionForm;
