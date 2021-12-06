import "./CountryPage.scss";
import { useEffect } from "react";
import { useParams } from "react-router";
import FilterButton from "../../components/FilterButton/FilterButton";
import PlacesList from "../../components/PlacesList/PlacesList";
import usePlaces from "../../hooks/usePlaces";

const CountryPage = () => {
  const { places, loadPlacesByCountry } = usePlaces();

  const countryName = places[0]?.country.name;

  const { id } = useParams();
  useEffect(() => {
    loadPlacesByCountry(id);
  }, [loadPlacesByCountry, id]);
  return (
    <div>
      <FilterButton />
      {countryName && <h1 className="country-title">{countryName}</h1>}
      <PlacesList places={places} />
    </div>
  );
};

export default CountryPage;
