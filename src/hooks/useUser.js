import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk, registerUserThunk } from "../redux/thunks/userThunks";

const useUser = () => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };

  const registerUser = (user) => {
    dispatch(registerUserThunk(user));
  };
  return {
    user,
    loginUser,
    registerUser,
  };
};

export default useUser;
