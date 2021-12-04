import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store/index";
import LogoutButton from "./LogoutButton";

describe("Given a LoginButton component", () => {
  describe("When it renders", () => {
    test("Then it should render a button with text in it", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <LogoutButton />
          </Provider>
        </Router>
      );
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
