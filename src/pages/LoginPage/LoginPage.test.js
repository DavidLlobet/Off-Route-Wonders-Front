import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store/index";
import LoginPage from "./LoginPage";
const store = configureStore();

describe("Given a LoginPage component,", () => {
  describe("When it is called", () => {
    test("Then it should render a page with a login and a register forms", () => {
      render(
        <Router>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </Router>
      );
    });
  });
});
