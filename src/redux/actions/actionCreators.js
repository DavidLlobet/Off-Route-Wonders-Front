import actionTypes from "./actionTypes";

export const loadPlacesAction = (places) => ({
  type: actionTypes.loadPlaces,
  places,
});

export const loadPlacesByCountryAction = (places) => ({
  type: actionTypes.loadPlacesByCountry,
  places,
});

export const loadPlacesByAuthorAction = (places) => ({
  type: actionTypes.loadPlacesByAuthor,
  places,
});

export const loadPlaceAction = (place) => ({
  type: actionTypes.loadPlace,
  place,
});

export const createPlaceAction = (place) => ({
  type: actionTypes.createPlace,
  place,
});

export const updatePlaceAction = (place) => ({
  type: actionTypes.updatePlace,
  place,
});

export const deletePlaceAction = (id) => ({
  type: actionTypes.deletePlace,
  id,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const registerUserAction = (user) => ({
  type: actionTypes.registerUser,
  user,
});

export const logoutUserAction = () => ({
  type: actionTypes.logoutUser,
});
