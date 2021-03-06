import { render, screen } from "@testing-library/react";
import jwtDecode from "jwt-decode";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../redux/store";
import PlacesByAuthorList from "./PlacesByAuthorList";
jest.mock("jwt-decode", () => () => ({}));

describe("Given a PlacesByAuthorList component", () => {
  describe("When it renders", () => {
    test("Then it should show a list of places with info about them", () => {
      const store = configureStore();

      const places = [
        {
          id: "61a29a80a8700455c9903d38",
          title: "Blue Eye Theth",
          images: [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/80/0d.jpg",
          ],
          author: {
            username: "Mario",
          },
          date: "28 - 11 - 2021",
          country: {
            name: "Filipinas",
          },
        },
        {
          id: "61a29a80a8700455c9903d56",
          title: "Red Eye Theth",
          images: [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/80/0d.jpg",
          ],
          author: {
            username: "David",
          },
          date: "28 - 11 - 2021",
          country: {
            name: "Filipinas",
          },
        },
      ];
      render(
        <Router>
          <Provider store={store}>
            <PlacesByAuthorList places={places} />
          </Provider>
        </Router>
      );
      const placesImages = screen.getAllByRole("img");

      expect(placesImages).toHaveLength(places.length);
    });
  });
});
