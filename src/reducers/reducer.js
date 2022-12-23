import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { recipeReducer } from "./recipeReducer";

export default combineReducers({
  accountReducer,
  recipeReducer,
});
