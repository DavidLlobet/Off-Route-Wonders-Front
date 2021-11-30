import actionTypes from "../actions/actionTypes";

const placesReducer = (places = [], action) => {
  let newPlaces;

  switch (action.type) {
    case actionTypes.loadPlaces:
      newPlaces = [...action.places];
      break;

    case actionTypes.loadPlacesByCountry:
      newPlaces = [...places.filter((place) => place.country.id === action.id)];
      break;
    default:
      newPlaces = places;
  }
  return newPlaces;
};

export default placesReducer;
