import { render, screen } from "@testing-library/react";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import CreateFormPage from "./CreateFormPage";
import userEvent from "@testing-library/user-event";

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
      const button = screen.getByRole("button");

      expect(placeNameInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user types in all fields", () => {
    test("Then it should render a non disabled submit button", () => {
      const store = configureStore();

      render(
        <Router>
          <Provider store={store}>
            <CreateFormPage />
          </Provider>
        </Router>
      );

      const countryInput = screen.getByTestId("country");
      const titleInput = screen.getByTestId("title");
      const imageInput = screen.getByTestId("images");
      const longitudeInput = screen.getByTestId("longitude");
      const latitudeInput = screen.getByTestId("latitude");
      const textInput = screen.getByTestId("text");
      const button = screen.getByRole("button", { name: "Crear" });

      userEvent.type(titleInput, "Bender");
      userEvent.type(countryInput, "Bender");
      userEvent.type(imageInput, "image url");
      userEvent.type(longitudeInput, "2");
      userEvent.type(latitudeInput, "5");
      expect(button).toBeDisabled();
      userEvent.type(textInput, "Muy bonito");
      expect(button).not.toBeDisabled();
    });
  });
  describe("When the user types in the latitude input", () => {
    test("Then it should render a latitude input with the typed number inside", () => {
      const store = configureStore();

      render(
        <Router>
          <Provider store={store}>
            <CreateFormPage />
          </Provider>
        </Router>
      );

      const typedNumber = "21";

      const latitudeInput = screen.getByTestId("latitude");
      userEvent.type(latitudeInput, typedNumber);

      expect(latitudeInput).toHaveValue(+typedNumber);
    });
  });
});
