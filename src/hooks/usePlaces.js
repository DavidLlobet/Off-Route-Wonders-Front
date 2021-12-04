import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPlaceThunk,
  deletePlaceThunk,
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

  const deletePlace = (id) => {
    dispatch(deletePlaceThunk(id));
  };
  return {
    places,
    loadPlaces,
    loadPlacesByCountry,
    loadPlacesByAuthor,
    createPlace,
    deletePlace,
  };
};

export default usePlaces;
