import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPlaceThunk } from "../redux/thunks/placesThunks";

const usePlace = () => {
  const place = useSelector((store) => store.place);
  const dispatch = useDispatch();

  const loadPlace = useCallback(
    (id) => {
      dispatch(loadPlaceThunk(id));
    },
    [dispatch]
  );
  return { place, loadPlace };
};

export default usePlace;
