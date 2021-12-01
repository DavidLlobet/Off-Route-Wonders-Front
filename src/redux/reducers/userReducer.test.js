import { loginUserAction, registerUserAction } from "../actions/actionCreators";
import userReducer from "./userReducer";

describe("Given a userReducer reducer", () => {
  describe("When it receives a user and a loginUserAction", () => {
    test("Then it should return a logged user", () => {
      const user = {
        username: "Mario",
        password: "Mario",
      };
      const loggedUser = userReducer({}, loginUserAction(user));

      expect(loggedUser.isAuthenticated).toBe(true);
    });
  });
  describe("When it receives a user and a registerUserAction", () => {
    test("Then it should return a new user", () => {
      const user = {
        username: "Luigi",
        password: "Luigi",
      };
      const newUser = userReducer({}, registerUserAction(user));

      expect(newUser.isAuthenticated).toBe(false);
    });
  });
});
