import PlaceCard from "./PlaceCard";
import configureStore from "../../redux/store/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

describe("Given a PlaceCard component", () => {
  describe("When it receives a place", () => {
    test("Then it should render that place", () => {
      const store = configureStore();

      const place = {
        id: "61a29a80a8700455c9903d38",
        title: "Blue Eye Theth",
        images: [
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/80/0d.jpg",
        ],
        author: {
          username: "Mario",
        },
        date: "28 - 11 - 2021",
      };

      render(
        <Provider store={store}>
          <PlaceCard place={place} />
        </Provider>
      );

      const title = screen.getByRole("listitem", { title: place.title });

      expect(title).toBeInTheDocument();
    });
  });
});
