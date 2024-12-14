import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

export default function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  console.log(recipe);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(`http://localhost:3000/recipes/${id}`);
        const { result } = await response.json();
        setRecipe(result[0]);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="text-center">Recipe not found</div>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <RecipeCard recipe={recipe} clickable={false} />
        <div className="grid grid-cols-2 gap-4">
          <div className="sticky top-0 overflow-y-auto max-h-screen bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Ingredients
            </h3>
            <pre className="text-gray-600 whitespace-pre-wrap">
              {recipe.ingredients}
            </pre>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Procedures
            </h3>
            <pre className="text-gray-600 whitespace-pre-wrap">
              {recipe.instructions}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
