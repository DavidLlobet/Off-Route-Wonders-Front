import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <Header />;
          </Provider>
        </Router>
      );
      const header = screen.getByTitle("header");

      expect(header).toHaveClass("header");
    });
  });
});
