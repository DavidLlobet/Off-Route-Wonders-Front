import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store/index";
import DeleteButton from "./DeleteButton";

describe("Given a DeleteButton component", () => {
  describe("When it renders", () => {
    test("Then it should render a button with the text 'Eliminar' in it", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <DeleteButton />
          </Provider>
        </Router>
      );
      const button = screen.getByRole("button");

      expect(button).toHaveTextContent("Eliminar");
    });
  });
});
