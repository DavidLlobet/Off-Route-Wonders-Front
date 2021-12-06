import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPlaceThunk, updatePlaceThunk } from "../redux/thunks/placesThunks";

const usePlace = () => {
  const place = useSelector((store) => store.place);
  const dispatch = useDispatch();

  const loadPlace = useCallback(
    (id) => {
      dispatch(loadPlaceThunk(id));
    },
    [dispatch]
  );
  const updatePlace = (place, id) => {
    dispatch(updatePlaceThunk(place, id));
  };

  return { place, loadPlace, updatePlace };
};

export default usePlace;
