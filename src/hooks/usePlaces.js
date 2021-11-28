import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPlacesThunk } from "../redux/thunks/placesThunks";

const usePlaces = () => {
  const places = useSelector((store) => store.places);
  const dispatch = useDispatch();

  const loadPlaces = useCallback(() => {
    dispatch(loadPlacesThunk());
  }, [dispatch]);

  return { places, loadPlaces };
};

export default usePlaces;
