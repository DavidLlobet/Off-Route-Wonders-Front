import PlaceByAuthorCard from "./PlaceByAuthorCard";
import configureStore from "../../redux/store/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
const store = configureStore();

describe("Given a PlaceCard component", () => {
  describe("When it receives a place", () => {
    test("Then it should render that place", () => {
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
      };

      render(
        <Router>
          <Provider store={store}>
            <PlaceByAuthorCard place={place} />
          </Provider>
        </Router>
      );

      const title = screen.getByRole("img", { class: "place-card__image" });
      const button1 = screen.getByRole("button", {
        name: "Modificar",
      });
      const button2 = screen.getByRole("button", {
        name: "Eliminar",
      });

      expect(title).toBeInTheDocument();
      expect(button1).toBeInTheDocument();
      expect(button2).toBeInTheDocument();
    });
  });
});
