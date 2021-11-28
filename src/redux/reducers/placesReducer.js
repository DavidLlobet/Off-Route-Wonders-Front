import actionTypes from "../actions/actionTypes";

const placesReducer = (places = [], action) => {
  let newPlaces;

  switch (action.type) {
    case actionTypes.loadPlaces:
      newPlaces = [...action.places];
      break;
    default:
      newPlaces = places;
  }
  return newPlaces;
};

export default placesReducer;
