import "./CountryPage.scss";
import { useEffect } from "react";
import { useParams } from "react-router";
import FilterButton from "../../components/FilterButton/FilterButton";
import PlacesList from "../../components/PlacesList/PlacesList";
import usePlaces from "../../hooks/usePlaces";

const CountryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { places, loadPlacesByCountry } = usePlaces();

  const countryName = places[0]?.country?.name;

  const { id } = useParams();
  useEffect(() => {
    loadPlacesByCountry(id);
  }, [loadPlacesByCountry, id]);
  return (
    <div>
      <FilterButton />
      {countryName === "Albania" && <div className="albania-photo"></div>}
      {countryName === "Filipinas" && <div className="filipinas-photo"></div>}
      {countryName === "Vietnam" && <div className="vietnam-photo"></div>}

      {countryName && <h1 className="country-title">{countryName}</h1>}
      <PlacesList places={places} />
    </div>
  );
};

export default CountryPage;
