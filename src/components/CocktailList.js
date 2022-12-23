import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export const CocktailList = ({ cocktails }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { recipes } = useSelector((state) => state.recipeReducer);

  //on récupère les cocktails en fonction de la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const filteredCocktails = cocktails.filter((cocktail) => {
    return cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="Cocktails">
        <h2>Liste des cocktails</h2>
        <input
          className="search"
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Rechercher"
        />
        <ul>
          {filteredCocktails.map((cocktail) => (
            <li key={cocktail.idDrink}>
              <NavLink to={"/cocktail/" + cocktail.idDrink}>
                <h3>{cocktail.strDrink}</h3>
              </NavLink>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktailsImg" />
            </li>
          ))}
        </ul>
        <h2>Liste des cocktails des utilisateurs</h2>
        {recipes.length === 0 && (
          <p>
            <strong>Aucun coktail créé</strong>
          </p>
        )}
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <NavLink to={"/mycocktail/" + recipe.id}>
                <h3>{recipe.title}</h3>
              </NavLink>
              <img src={recipe.image} style={{ width: "180px" }} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
