import { useParams } from "react-router-dom";

export const Cocktail = ({ cocktails }) => {
  const { cocktailid } = useParams();

  let drink = cocktails.filter((drink) => parseInt(drink.idDrink) === parseInt(cocktailid))[0];

  // On récupère les ingrédients dans un tableau
  let ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (drink["strIngredient" + i] !== null) {
      ingredients.push(drink["strIngredient" + i]);
    }
  }
  // console.log(ingredients);

  let measures = [];
  for (let i = 1; i <= 15; i++) {
    if (drink["strMeasure" + i] !== null) {
      measures.push(drink["strMeasure" + i]);
    }
  }

  return (
    <div className="Cocktail">
      <div className="backOpac"></div>
      <h2>{drink.strDrink}</h2>
      <div className="flexCocktail">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="imgByCocktails" />
        <div>
          <h4>Ingredients :</h4>
          {ingredients.map((ingredient, i) => (
            <li key={i}>
              {measures[i]} {ingredient}
            </li>
          ))}
        </div>
      </div>

      <p>{drink.strInstructions}</p>

      <h4>Try it !</h4>
    </div>
  );
};
