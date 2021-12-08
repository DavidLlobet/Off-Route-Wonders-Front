import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockComponent } from "react-dom/test-utils";
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
      const logo = screen.getByRole("link", {
        name: "Off Route Wonders",
      });
      const button = screen.getByRole("link", {
        name: "Albania",
      });

      expect(header).toHaveClass("header");
      expect(logo).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user clicks the submit button", () => {
    test.only("Then it should call a function", () => {
      const store = configureStore();

      const onClickFunction = jest.fn();

      render(
        <Router>
          <Provider store={store}>
            <Header onSubmit={onClickFunction} />;
          </Provider>
        </Router>
      );

      const button = screen.getByRole("link", {
        name: "Albania",
      });
      userEvent.click(button);

      expect(onClickFunction).toHaveBeenCalled();
    });
  });
});
