import axios from "axios";
import {
  loadPlacesByCountryThunk,
  loadPlacesThunk,
  loadPlaceThunk,
} from "./placesThunks";

jest.mock("axios");

describe("Given a loadPlacesThunk thunk,", () => {
  describe("When it calls the thunk,", () => {
    test("Then it should dispatch a loadPlacesAction action with the received places list.", async () => {
      const testPlacesList = [
        { test: "place 1" },
        { test: "place 2" },
        { test: "place 3" },
      ];
      const endpoint =
        "https://off-route-wonders-new-back.herokuapp.com/places";
      axios.get.mockResolvedValue(testPlacesList);
      const mockedDispatch = jest.fn();

      const receivedCallback = loadPlacesThunk();
      await receivedCallback(mockedDispatch);

      expect(axios.get).toHaveBeenCalledWith(endpoint);
      expect(mockedDispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadPlacesByCountryThunk thunk,", () => {
  describe("When it calls the thunk,", () => {
    test("Then it should dispatch a loadPlacesByCountryAction action with the received places list.", async () => {
      const testPlacesList = [
        {
          place: {
            title: "Blue Eye Theth",
            country: {
              id: "61a104bcec1d9f99c7672ca4",
              name: "Albania",
            },
          },
        },
      ];
      const endpoint =
        "https://off-route-wonders-new-back.herokuapp.com/places/country/61a104bcec1d9f99c7672ca4";
      axios.get.mockResolvedValue(testPlacesList);
      const mockedDispatch = jest.fn();

      const receivedCallback = loadPlacesByCountryThunk(
        "61a104bcec1d9f99c7672ca4"
      );
      await receivedCallback(mockedDispatch);

      expect(axios.get).toHaveBeenCalledWith(endpoint);
      expect(mockedDispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadPlaceByIdThunk thunk,", () => {
  describe("When it calls the thunk,", () => {
    test("Then it should dispatch a loadPlaceByIdAction action with the received places list.", async () => {
      const testPlace = {
        place: {
          id: "61acddc77c125df1b624a5ee",
          title: "Blue Eye Theth",
          country: {
            id: "61a104bcec1d9f99c7672ca4",
            name: "Albania",
          },
        },
      };

      const endpoint =
        "https://off-route-wonders-new-back.herokuapp.com/places/61acddc77c125df1b624a5ee";
      axios.get.mockResolvedValue(testPlace);
      const mockedDispatch = jest.fn();

      const receivedCallback = loadPlaceThunk("61acddc77c125df1b624a5ee");
      await receivedCallback(mockedDispatch);

      expect(axios.get).toHaveBeenCalledWith(endpoint);
      expect(mockedDispatch).toHaveBeenCalled();
    });
  });
});
