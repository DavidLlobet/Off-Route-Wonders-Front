import actionTypes from "../actions/actionTypes";
import currentPlaceReducer from "./currentPlaceReducer";

describe("Given a currentPlaceReducer reducer", () => {
  describe("When it receives a place and a loadPlace action", () => {
    test("Then it should return the robot received", () => {
      const place = {
        coordinates: {
          longitude: 123443454,
          latitude: 123454354,
        },
        author: {
          username: "Mario González",
        },
        title: "Blue Eye Theth",
        country: {
          name: "Albania",
        },
        images: [
          "https://storage.googleapis.com/off-route-wonders.appspot.com/dylan-gillis-3e_tXW5O3GQ-unsplash-1638035068556-.jpg",
          "https://storage.googleapis.com/off-route-wonders.appspot.com/2021105724573_1 (1)-1638035068569-.jpg",
        ],
        text: "Mola mucho",
        comments: [
          {
            text: "¡Que guapo!",
            author: {
              username: "Marc",
              id: "619fd3f198bdb970bc0c248e",
            },
            date: "2021-11-27T19:08:31.344Z",
            id: "61a271aeec1d9f99c7672cea",
          },
        ],
        date: "2021-11-27T17:44:29.550Z",
        id: "61a26e7d1c9f711f24d1a8fc",
      };
      const action = {
        type: actionTypes.loadPlace,
        place,
      };

      const newPlace = currentPlaceReducer(place, action);

      expect(place).toEqual(newPlace);
    });
  });
});
