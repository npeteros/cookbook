import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

const Admin = () => {
  const [, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPendingRecipes() {
      try {
        const response = await fetch("http://localhost:3000/recipes/pending");
        const { result } = await response.json();
        setRecipes(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pending recipes:", error);
        setLoading(false);
      }
    }

    fetchPendingRecipes();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.email !== "ethan@gmail.com") {
          navigate("/");
        }
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [setUser, navigate]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Pending Recipes</h1>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  function approveRecipe(id) {
    fetch(`http://localhost:3000/recipes/${id}/approve`, {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
        alert("Recipe approved successfully");
      })
      .catch((error) => console.error("Error approving recipe:", error));
  }

  function rejectRecipe(id) {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
        alert("Recipe rejected successfully");
      })
      .catch((error) => console.error("Error rejecting recipe:", error));
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Pending Recipes</h1>
      {recipes.length === 0 ? (
        <p className="text-gray-600">No pending recipes found.</p>
      ) : (
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Meal Types</th>
              <th className="px-4 py-2">Ingredients</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{recipe.name}</td>
                <td className="px-4 py-2">
                  <ul>
                    <li>{recipe.breakfast ? "Breakfast " : null}</li>
                    <li>{recipe.lunch ? "Lunch " : null}</li>
                    <li>{recipe.dinner ? "Dinner " : null}</li>
                  </ul>
                </td>
                <td className="px-4 py-2 whitespace-pre-wrap">
                  {recipe.ingredients}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => approveRecipe(recipe.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectRecipe(recipe.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 ml-2"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
