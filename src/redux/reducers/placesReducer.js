import actionTypes from "../actions/actionTypes";

const placesReducer = (places = [], action) => {
  let newPlaces;

  switch (action.type) {
    case actionTypes.loadPlaces:
      newPlaces = [...action.places];
      break;

    case actionTypes.loadPlacesByCountry:
      newPlaces = [...action.places];
      break;

    case actionTypes.loadPlacesByAuthor:
      newPlaces = [...action.places];
      break;

    case actionTypes.createPlace:
      newPlaces = [...places, action.place];
      break;

    case actionTypes.deletePlace:
      newPlaces = places.filter((place) => place.id !== action.id);
      break;
    default:
      newPlaces = places;
  }
  return newPlaces;
};

export default placesReducer;
