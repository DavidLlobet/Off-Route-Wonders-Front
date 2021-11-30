import { useEffect } from "react";
import FilterButton from "../../components/FilterButton/FilterButton";
import PlacesList from "../../components/PlacesList/PlacesList";
import usePlaces from "../../hooks/usePlaces";

const CountryPage = () => {
  const { places, loadPlacesByCountry } = usePlaces();

  useEffect(() => {
    loadPlacesByCountry();
  }, [loadPlacesByCountry]);
  return (
    <div>
      <FilterButton />
      <PlacesList places={places} />
    </div>
  );
};

export default CountryPage;
