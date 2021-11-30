import HomePage from "./HomePage";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
const store = configureStore();

describe("Given a HomePage component,", () => {
  describe("When it is called", () => {
    test("Then it should render a HomePage", () => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );
    });
  });
});
