import { useDispatch, useSelector } from "react-redux";
import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "../redux/thunks/userThunks";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };

  const registerUser = (user) => {
    dispatch(registerUserThunk(user));
  };

  const logoutUser = () => {
    dispatch(logoutUserThunk());
  };
  return {
    user,
    loginUser,
    registerUser,
    logoutUser,
  };
};

export default useUser;
