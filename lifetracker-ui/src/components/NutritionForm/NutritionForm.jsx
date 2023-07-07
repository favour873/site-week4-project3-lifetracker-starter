import React from 'react'
import "./NutritionForm.css"

const NutritionForm = ({}) => {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState();
    const [imageurl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("fix this handle submit function")
      };
  return (
    <div className="nutrition-form">

        NutritionForm
        <form onSubmit={handleSubmit}>
            <label> Name </label>
            <input
            className="form-input"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}>
            </input>

            <label> Calories </label>
            <input 
            className="form-input"
            name="calories"
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}>

            </input>

            <label> ImageURL </label>
            <input 
            className="form-input"
            name="imageurl"
            type="text"
            value={imageurl}
            onChange={(e) => setImageUrl(e.target.value)}>
            </input>

            <label> Category </label>
            <input className="form-input"
            name="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            </input>

            <button className="submit-nutrition" type="submit"> Save </button>
        </form>
    </div>
  )
}

export default NutritionForm