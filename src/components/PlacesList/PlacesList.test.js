import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store/index";
import PlacesList from "./PlacesList";

describe("Given a PlacesList component", () => {
  describe("When it receives an array of two places", () => {
    test("Then it should return two places", () => {
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
        <Provider store={store}>
          <PlacesList places={places} />
        </Provider>
      );

      const result = screen.getAllByRole("img", {
        clas: "card__photo",
      });

      expect(result).toHaveLength(places.length);
    });
  });
});