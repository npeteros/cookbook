import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RecipeCard = ({ recipe, clickable = true }) => {
  return (
    <div className="max-w-lg mx-auto p-4">
      {clickable ? (
        <Link
          to={`/recipes/${recipe.id}`}
          className="block cursor-pointer bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
          <p className="text-gray-600">
            Good for: {recipe.breakfast ? "Breakfast " : null}
            {recipe.lunch ? "Lunch " : null}
            {recipe.dinner ? "Dinner " : null}
          </p>
        </Link>
      ) : (
        <div className="block bg-white shadow-md rounded-lg p-6 transition-shadow duration-300">
          <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
          <p className="text-gray-600">
            Good for: {recipe.breakfast ? "Breakfast " : null}
            {recipe.lunch ? "Lunch " : null}
            {recipe.dinner ? "Dinner " : null}
          </p>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
