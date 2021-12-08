import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import {
  loginUserAction,
  logoutUserAction,
  registerUserAction,
} from "../actions/actionCreators";

export const loginUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(
    `${process.env.REACT_APP_URL_API_USER}/login`,
    user
  );
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    localStorage.setItem("user", JSON.stringify({ token }));
    dispatch(loginUserAction(user));
    toast.success("Te has logeado correctamente");
  } else {
    toast.error("No has introducido tus datos correctamente");
  }
};

export const registerUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(
    process.env.REACT_APP_URL_API_USER + "/register",
    user
  );
  if (response.status === 200) {
    toast.success("Te has registrado correctamente");
    dispatch(registerUserAction(response.data));
  }
};

export const logoutUserThunk = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(logoutUserAction());
};
