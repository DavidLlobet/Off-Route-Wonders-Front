import { combineReducers } from "redux";
import currentPlaceReducer from "./currentPlaceReducer";
import placesReducer from "./placesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  places: placesReducer,
  user: userReducer,
  place: currentPlaceReducer,
});

export default rootReducer;
