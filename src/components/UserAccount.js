import { Navigate, NavLink } from "react-router-dom";
import { CreateRecipeForm } from "./CreateRecipeForm";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserAccount = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const { recipes } = useSelector((state) => state.recipeReducer);

  const [display, setDisplay] = useState(false);

  return (
    <>
      {!isAuthenticated && <Navigate to={"/connection"} />}
      <h2>Mes cocktails</h2>
      <div className="userRecette">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <NavLink to={"/mycocktail/" + recipe.id}>
              <h3>{recipe.title}</h3>
            </NavLink>
            <img src={recipe.image} style={{ width: "20%" }} />
          </div>
        ))}
      </div>
      <button onClick={() => setDisplay(!display)}>Créer un cocktail</button>
      {display && <CreateRecipeForm />}
    </>
  );
};

export default UserAccount;
