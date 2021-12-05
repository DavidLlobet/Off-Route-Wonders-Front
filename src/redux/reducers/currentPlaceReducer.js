import actionTypes from "../actions/actionTypes";

const currentPlaceReducer = (place = {}, action) => {
  let newPlace;

  switch (action.type) {
    case actionTypes.loadPlace:
      newPlace = { ...action.place };
      break;

    case actionTypes.updatePlace:
      newPlace = { ...action.place };
      break;

    default:
      newPlace = place;
  }

  return newPlace;
};

export default currentPlaceReducer;
