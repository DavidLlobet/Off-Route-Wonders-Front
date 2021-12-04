import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store/index";
import ModifyButton from "./ModifyButton";

describe("Given a ModifyButton component", () => {
  describe("When it renders", () => {
    test("Then it should render a button with the text 'Modificar' in it", () => {
      const store = configureStore();
      render(
        <Router>
          <Provider store={store}>
            <ModifyButton />
          </Provider>
        </Router>
      );
      const button = screen.getByRole("link");

      expect(button).toHaveTextContent("Modificar");
    });
  });
});
