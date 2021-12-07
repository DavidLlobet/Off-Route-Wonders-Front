import PlaceByAuthorCard from "./PlaceByAuthorCard";
import configureStore from "../../redux/store/index";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
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

      expect(title).toBeInTheDocument();
    });
  });
  // describe("When it receives an onClick function through props and the button is clicked", () => {
  //   test("Then it should call the function", () => {
  //     const place = {
  //       id: "61a29a80a8700455c9903d38",
  //       title: "Blue Eye Theth",
  //       images: [
  //         "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/80/0d.jpg",
  //       ],
  //       author: {
  //         username: "Mario",
  //       },
  //       date: "28 - 11 - 2021",
  //       country: {
  //         name: "Filipinas",
  //       },
  //     };
  //     const onClickFunction = jest.fn();
  //     render(
  //       <Router>
  //         <Provider store={store}>
  //           <PlaceByAuthorCard place={place} onClick={onClickFunction} />
  //         </Provider>
  //       </Router>
  //     );
  //     const button = screen.getByRole("button", {
  //       name: "Modificar",
  //     });
  //     userEvent.click(button);

  //     expect(onClickFunction).toHaveBeenCalled();
  //   });
  // });
});
