import {
  createPlaceAction,
  deletePlaceAction,
  loadPlaceAction,
  loadPlacesAction,
  loadPlacesByAuthorAction,
  loadPlacesByCountryAction,
  loginUserAction,
  registerUserAction,
  updatePlaceAction,
} from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given an actionCreators", () => {
  describe("When it calls a loadPlacesAction", () => {
    test("Then it should return a list of places", () => {
      const initialPlaces = [
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
      const expected = {
        type: actionTypes.loadPlaces,
        places: initialPlaces,
      };

      const result = loadPlacesAction(initialPlaces);

      expect(result).toEqual(expected);
    });
  });
});

describe("When it calls a loadPlacesByCountryAction", () => {
  test("Then it should return a list of places", () => {
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
    const expected = {
      type: actionTypes.loadPlacesByCountry,
      places,
    };

    const result = loadPlacesByCountryAction(places);

    expect(result).toEqual(expected);
  });
});

describe("When it calls a loadPlacesByAuthorAction", () => {
  test("Then it should return a list of places", () => {
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
    const expected = {
      type: actionTypes.loadPlacesByAuthor,
      places,
    };

    const result = loadPlacesByAuthorAction(places);

    expect(result).toEqual(expected);
  });
});

describe("When it calls a loadPlaceAction", () => {
  test("Then it should return a specific place", () => {
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
    const expected = {
      type: actionTypes.loadPlace,
      place,
    };

    const result = loadPlaceAction(place);

    expect(result).toEqual(expected);
  });
});

describe("When it calls a loginUserAction", () => {
  test("Then it should return a logged user", () => {
    const user = {
      username: "Mario",
      password: "Mario",
    };
    const expected = {
      type: actionTypes.loginUser,
      user: user,
    };

    const result = loginUserAction(user);

    expect(result).toEqual(expected);
  });
});

describe("When it calls a createPlaceAction", () => {
  test("Then it should return a new place", () => {
    const newPlace = {
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
    const expected = {
      type: actionTypes.createPlace,
      place: newPlace,
    };

    const result = createPlaceAction(newPlace);

    expect(result).toEqual(expected);
  });
});

describe("When it calls an updatePlaceAction", () => {
  test("Then it should return a new place", () => {
    const modifiedPlace = {
      coordinates: {
        longitude: 456546456,
        latitude: 123454354,
      },
      author: {
        username: "Mario González",
      },
      title: "Red Eye Theth",
      country: {
        name: "Albania",
      },
      images: [
        "https://storage.googleapis.com/off-route-wonders.appspot.com/dylan-gillis-3e_tXW5O3GQ-unsplash-1638035068556-.jpg",
        "https://storage.googleapis.com/off-route-wonders.appspot.com/2021105724573_1 (1)-1638035068569-.jpg",
      ],
      text: "Mola bastante",
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
    const expected = {
      type: actionTypes.updatePlace,
      place: modifiedPlace,
    };

    const result = updatePlaceAction(modifiedPlace);

    expect(result).toEqual(expected);
  });
});

describe("When it calls a deletePlaceAction", () => {
  test("Then it should delete a place", () => {
    const placeToDelete = {
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
    const expected = {
      type: actionTypes.deletePlace,
      id: placeToDelete.id,
    };

    const result = deletePlaceAction(placeToDelete.id);

    expect(result).toEqual(expected);
  });
});

describe("When it calls a registerUserAction", () => {
  test("Then it should return a new user", () => {
    const newUser = {
      username: "Luigi",
      password: "Luigi",
    };
    const expected = {
      type: actionTypes.registerUser,
      user: newUser,
    };

    const result = registerUserAction(newUser);

    expect(result).toEqual(expected);
  });
});
