import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MyProfilePage from "./MyProfilePage";
import configureStore from "../../redux/store/index";
import { server } from "../../../mocks/server";
const store = configureStore();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a MyProfilePage component", () => {
  describe("When it renders", () => {
    test("Then it should render a card with the title 'Mi perfil'", () => {
      render(
        <Provider store={store}>
          <Router>
            <MyProfilePage />
          </Router>
        </Provider>
      );
      const title = screen.getByText("Mi perfil");

      expect(title).toBeInTheDocument();
    });
  });
});
