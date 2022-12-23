const stateInit = {
  recipes: [],
  errorMsg: "",
};

export const recipeReducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case "CREATE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.concat(action.payload.recipe),
        errorMsg: "",
      };
    case "DELETE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.idDrink !== action.payload.recipe.idDrink),
      };
    default:
      return state;
  }
};
