import { combineReducers } from "redux";
import { dogReducer } from "./dog-reducer";
import { catReducer } from "./cat-reducer";

export default combineReducers({
  cat: catReducer,
  dog: dogReducer
});
