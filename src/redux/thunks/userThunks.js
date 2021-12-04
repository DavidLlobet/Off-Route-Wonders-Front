import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loginUserAction,
  logoutUserAction,
  registerUserAction,
} from "../actions/actionCreators";

export const loginUserThunk = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL_API_USER}/login`,
      user
    );

    if (response.status === 200) {
      const token = response.data.token;
      const user = jwtDecode(token);
      dispatch(loginUserAction(user));
      localStorage.setItem("user", JSON.stringify({ token }));
    }
  } catch {}
};

export const registerUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(
    process.env.REACT_APP_URL_API_USER + "/register",
    user
  );
  if (response.status === 200) {
    dispatch(registerUserAction(response.data));
  }
};

export const logoutUserThunk = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(logoutUserAction());
};
