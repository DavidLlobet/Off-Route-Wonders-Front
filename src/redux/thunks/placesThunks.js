import axios from "axios";
import {
  createPlaceAction,
  deletePlaceAction,
  loadPlaceAction,
  loadPlacesAction,
  loadPlacesByAuthorAction,
  loadPlacesByCountryAction,
  updatePlaceAction,
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
  const token = JSON.parse(storageUser);
  const response = await axios.get(
    `${process.env.REACT_APP_URL_API}/my-profile`,
    {
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }
  );
  dispatch(loadPlacesByAuthorAction(response.data));
};

export const loadPlaceThunk = (id) => async (dispatch) => {
  const { data: place } = await axios.get(
    `${process.env.REACT_APP_URL_API}/${id}`
  );
  dispatch(loadPlaceAction(place));
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

export const updatePlaceThunk = (place, id) => async (dispatch) => {
  const storageUser = localStorage.getItem("user");
  const { token } = JSON.parse(storageUser);
  const updatePlace = await axios.put(
    `${process.env.REACT_APP_URL_API}/update/${id}`,
    place,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (updatePlace.status === 200) {
    dispatch(updatePlaceAction(updatePlace.data));
  }
};

export const deletePlaceThunk = (id) => async (dispatch) => {
  const storageUser = localStorage.getItem("user");
  const { token } = JSON.parse(storageUser);
  const deletePlace = await axios.delete(
    `${process.env.REACT_APP_URL_API}/delete/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (deletePlace.status === 200) {
    dispatch(deletePlaceAction(id));
  }
};
