import axios from "axios";
import {
  loadPlacesAction,
  loadPlacesByCountryAction,
} from "../actions/actionCreators";

export const loadPlacesThunk = () => async (dispatch) => {
  const { data: places } = await axios.get(process.env.REACT_APP_URL_API);
  dispatch(loadPlacesAction(places));
};

export const loadPlacesByCountryThunk = (idCountry) => async (dispatch) => {
  const { data: id } = await axios.get(
    `${process.env.REACT_APP_URL_API}/country/${idCountry}`
  );
  dispatch(loadPlacesByCountryAction(id));
};
