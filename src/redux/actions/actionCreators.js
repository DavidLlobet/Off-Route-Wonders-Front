import actionTypes from "./actionTypes";

export const loadPlacesAction = (places) => ({
  type: actionTypes.loadPlaces,
  places,
});

export const loadPlacesByCountryAction = (id) => ({
  type: actionTypes.loadPlacesByCountry,
  id,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
