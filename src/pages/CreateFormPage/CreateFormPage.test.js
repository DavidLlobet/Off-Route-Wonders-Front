import { render, screen } from "@testing-library/react";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import CreateFormPage from "./CreateFormPage";

describe("Given a CreateFormPage", () => {
  describe("When it renders", () => {
    test("Then it should render a form with several inputs and a button", () => {
      const store = configureStore();

      render(
        <Router>
          <Provider store={store}>
            <CreateFormPage />
          </Provider>
        </Router>
      );
      const [placeNameInput] = screen.getAllByRole("textbox");

      expect(placeNameInput).toBeInTheDocument();
    });
  });
});
