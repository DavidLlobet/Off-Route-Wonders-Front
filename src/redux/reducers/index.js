import { combineReducers } from "redux";
import placesReducer from "./placesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  places: placesReducer,
  user: userReducer,
});

export default rootReducer;
