import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import LoginButton from "./LoginButton";
import configureStore from "../../redux/store/index";

describe("Given a LoginButton component", () => {
  describe("When it renders", () => {
    test("Then it should render a button with text in it", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <LoginButton />
          </Provider>
        </Router>
      );
      const button = screen.getByRole("link");

      expect(button).toBeInTheDocument();
    });
  });
});
