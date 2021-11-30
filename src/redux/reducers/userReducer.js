import actionTypes from "../actions/actionTypes";

const userReducer = (user = { isAuthenticated: false, user: {} }, action) => {
  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = { user: action.user, isAuthenticated: true };
      console.log(newUser);
      break;
    default:
      newUser = { ...user };
      break;
  }

  return newUser;
};
export default userReducer;
