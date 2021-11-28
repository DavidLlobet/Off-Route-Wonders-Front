import actionTypes from "./actionTypes";

export const loadPlacesAction = (places) => ({
  type: actionTypes.loadPlaces,
  places,
});
