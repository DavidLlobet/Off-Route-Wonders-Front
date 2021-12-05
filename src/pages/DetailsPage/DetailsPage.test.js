import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import { server } from "../../../mocks/server";
import { BrowserRouter as Router } from "react-router-dom";
import DetailsPage from "./DetailsPage";
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

describe("Given a DetailsPage component,", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(
        <Router>
          <Provider store={store}>
            <DetailsPage />
          </Provider>
        </Router>
      );
    });
  });
});
