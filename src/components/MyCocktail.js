import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MyCocktail = () => {
  const { recipes } = useSelector((state) => state.recipeReducer);

  const { id } = useParams();

  let drink = recipes.filter((drink) => parseInt(drink.id) === parseInt(id))[0];
  console.log(drink);
  return (
    <>
      <div className="Cocktail">
        <div className="backOpac"></div>
        <h2>{drink.title}</h2>
        <div className="flexCocktail">
          <img src={drink.image} className="imgByCocktails" />

          <div>
            <h4>Ingredients</h4>
            <li>
              {drink.ingr1} : {drink.meas1}
            </li>
            <li>
              {drink.ingr2} : {drink.meas2}
            </li>
            <li>
              {drink.ingr3} : {drink.meas3}
            </li>
          </div>
        </div>
        <p>{drink.description}</p>
        <h4>Try it !</h4>
      </div>
    </>
  );
};

export default MyCocktail;
