import actionTypes from "./actionTypes";

export const loadPlacesAction = (places) => ({
  type: actionTypes.loadPlaces,
  places,
});

export const loadPlacesByCountryAction = (places) => ({
  type: actionTypes.loadPlacesByCountry,
  places,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});
