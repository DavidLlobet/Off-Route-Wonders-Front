import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPlaceThunk,
  loadPlacesByAuthorThunk,
  loadPlacesByCountryThunk,
  loadPlacesThunk,
} from "../redux/thunks/placesThunks";

const usePlaces = () => {
  const places = useSelector((store) => store.places);
  const dispatch = useDispatch();

  const loadPlaces = useCallback(() => {
    dispatch(loadPlacesThunk());
  }, [dispatch]);

  const loadPlacesByCountry = useCallback(() => {
    dispatch(loadPlacesByCountryThunk());
  }, [dispatch]);

  const loadPlacesByAuthor = useCallback(() => {
    dispatch(loadPlacesByAuthorThunk());
  }, [dispatch]);

  const createPlace = (place) => {
    dispatch(createPlaceThunk(place));
  };

  return {
    places,
    loadPlaces,
    loadPlacesByCountry,
    loadPlacesByAuthor,
    createPlace,
  };
};

export default usePlaces;
