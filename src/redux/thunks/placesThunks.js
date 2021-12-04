import axios from "axios";
import {
  createPlaceAction,
  loadPlacesAction,
  loadPlacesByAuthorAction,
  loadPlacesByCountryAction,
} from "../actions/actionCreators";

export const loadPlacesThunk = () => async (dispatch) => {
  const { data: places } = await axios.get(process.env.REACT_APP_URL_API);
  dispatch(loadPlacesAction(places));
};

export const loadPlacesByCountryThunk = (idCountry) => async (dispatch) => {
  const response = await axios.get(
    `${process.env.REACT_APP_URL_API}/country/${idCountry}`
  );
  dispatch(loadPlacesByCountryAction(response.data));
};

export const loadPlacesByAuthorThunk = () => async (dispatch) => {
  const storageUser = localStorage.getItem("user");
  const { token } = JSON.parse(storageUser);
  const response = await axios.get(
    `${process.env.REACT_APP_URL_API}/my-profile`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  dispatch(loadPlacesByAuthorAction(response.data));
};

export const createPlaceThunk = (place) => async (dispatch) => {
  const storageUser = localStorage.getItem("user");
  const { token } = JSON.parse(storageUser);
  const createPlace = await axios.post(
    `${process.env.REACT_APP_URL_API}/create`,
    place,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (createPlace.status === 200) {
    dispatch(createPlaceAction(createPlace.data));
  }
};

// `${process.env.REACT_APP_URL_API}/create`,
