import { useEffect } from "react";
import { useParams } from "react-router";
import FilterButton from "../../components/FilterButton/FilterButton";
import PlacesList from "../../components/PlacesList/PlacesList";
import usePlaces from "../../hooks/usePlaces";

const CountryPage = () => {
  const { places, loadPlacesByCountry } = usePlaces();
  console.log(places);

  const { id } = useParams();
  useEffect(() => {
    loadPlacesByCountry(id);
  }, [loadPlacesByCountry, id]);
  return (
    <div>
      <FilterButton />
      <PlacesList places={places} />
    </div>
  );
};

export default CountryPage;
