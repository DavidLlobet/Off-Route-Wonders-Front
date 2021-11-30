import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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

  return { places, loadPlaces, loadPlacesByCountry };
};

export default usePlaces;
