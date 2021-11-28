import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { getRandomPlaces } from "../../factories/placesFactory";
import configureStore from "../../redux/store/index";
import PlacesList from "./PlacesList";

describe("Given a PlacesList component", () => {
  describe("When it receives an array of two places", () => {
    test("Then it should return two places", () => {
      const store = configureStore();
      const places = getRandomPlaces(2);

      render(
        <Provider store={store}>
          <PlacesList places={places} />
        </Provider>
      );

      const result = screen.getAllByRole("listitem", {
        name: "place-item",
      });

      expect(result).toHaveLength(places.length);
    });
  });
});
