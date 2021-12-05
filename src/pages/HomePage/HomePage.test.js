import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import { server } from "../../../mocks/server";
import { BrowserRouter as Router } from "react-router-dom";
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

describe("Given a HomePage component,", () => {
  describe("When it renders", () => {
    test("Then it should render a page with a heading that says 'Entradas recientes'", () => {
      render(
        <Router>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </Router>
      );
      const title = screen.getByText("Entradas recientes");

      expect(title).toBeInTheDocument();
    });
  });
});
