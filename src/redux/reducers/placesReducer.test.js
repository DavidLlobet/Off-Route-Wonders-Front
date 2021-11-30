import {
  loadPlacesAction,
  loadPlacesByCountryAction,
} from "../actions/actionCreators";
import actionTypes from "../actions/actionTypes";
import placesReducer from "./placesReducer";

describe("Given a placesReducer reducer", () => {
  describe("When it receives a list of places and a loadPlacesAction", () => {
    test("Then it should return a new list of places", () => {
      const places = [
        {
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
        },
        {
          coordinates: {
            longitude: 123443454,
            latitude: 123454354,
          },
          author: {
            username: "Mario González",
          },
          title: "Paradise Cave",
          country: {
            name: "Vietnam",
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
        },
      ];
      const newPlaces = placesReducer([], loadPlacesAction(places));

      expect(newPlaces).toEqual(places);
    });
  });
  describe("When it receives a list of places and a loadPlacesByCountryAction", () => {
    test("Then it should return a new list of places", () => {
      const places = [
        {
          coordinates: {
            longitude: 123443454,
            latitude: 123454354,
          },
          author: {
            username: "Mario González",
          },
          title: "Blue Eye Theth",
          country: {
            id: "61a1057eec1d9f99c7672ca6",
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
        },
        {
          coordinates: {
            longitude: 123443454,
            latitude: 123454354,
          },
          author: {
            username: "Mario González",
          },
          title: "Paradise Cave",
          country: {
            id: "61a1057eec1d9f99c7672ca6",

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
        },
      ];
      const newPlaces = placesReducer([], loadPlacesByCountryAction(places));

      expect(newPlaces).toEqual(places);
    });
  });
});
