import axios from "axios";
import { loadPlacesAction } from "../actions/actionCreators";

export const loadPlacesThunk = () => async (dispatch) => {
  const { data: places } = await axios.get(process.env.REACT_APP_URL_API);
  dispatch(loadPlacesAction(places));
};
