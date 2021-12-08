import LoginForm from "./LoginForm";
import configureStore from "../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
const { screen, render } = require("@testing-library/react");
const { Provider } = require("react-redux");

describe("Given a LoginForm component", () => {
  describe("When it renders", () => {
    test("Then it should render a form with several inputs and a button", () => {
      const store = configureStore();

      const username = "Introduce tu nombre de usuario";
      const password = "Introduce tu contraseña";

      render(
        <Router>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </Router>
      );

      const usernameInput = screen.getByPlaceholderText(username);
      const passwordInput = screen.getByPlaceholderText(password);
      const button = screen.getByRole("button");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
