import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../../redux/store";
import DetailsCard from "./DetailsCard";
jest.mock("jwt-decode", () => () => ({}));

describe("Given a DetailsCard component", () => {
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
        country: {
          name: "Filipinas",
        },
        comments: [],
        coordinates: {
          longitude: "43.4343",
          latitude: "21.433",
        },
      };

      render(
        <Provider store={store}>
          <DetailsCard place={place} />
        </Provider>
      );
      const image = screen.getByRole("img", { name: "Blue Eye Theth" });

      expect(image).toBeInTheDocument();
    });
  });
});
