import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [shownRecipes, setShownRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("http://localhost:3000/recipes");
        const { result } = await response.json();
        setShownRecipes(result);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl text-center font-bold mb-4">Our Recipes</h2>
      <p className="text-center">
        Explore a variety of recipes from around the world.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {shownRecipes.map((recipe) => (
          <div key={recipe.id} className="w-full">
            <RecipeCard key={recipe.id} recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
