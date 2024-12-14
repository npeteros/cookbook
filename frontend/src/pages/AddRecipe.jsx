import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const [formData, setFormData] = useState({
    name: "",
    mealTypes: {
      breakfast: false,
      lunch: false,
      dinner: false,
    },
    ingredients: "",
    procedure: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      mealTypes: {
        ...formData.mealTypes,
        [name]: checked,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Recipe submitted:", formData);

    try {
      const response = await fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const logData = await response.json();
      console.log(logData);
      if (response.ok) {
        navigate("/");
      }
      throw new Error(response.statusText);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="py-8">
      <form
        className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name of Dish
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <p className="block text-gray-700 font-medium mb-2">Meal Type</p>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              checked={formData.mealTypes.breakfast}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="breakfast" className="text-gray-700">
              Breakfast
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="lunch"
              name="lunch"
              checked={formData.mealTypes.lunch}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="lunch" className="text-gray-700">
              Lunch
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="dinner"
              name="dinner"
              checked={formData.mealTypes.dinner}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="dinner" className="text-gray-700">
              Dinner
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-medium mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="procedure"
            className="block text-gray-700 font-medium mb-2"
          >
            Procedure
          </label>
          <textarea
            id="procedure"
            name="procedure"
            value={formData.procedure}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white font-medium py-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
