import "./HomePage.scss";
import { useEffect, useState } from "react";
import FilterButton from "../../components/FilterButton/FilterButton";
import PlacesList from "../../components/PlacesList/PlacesList";
import usePlaces from "../../hooks/usePlaces";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { places, loadPlaces } = usePlaces();
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    loadPlaces();
    setPlacesList(places);
  }, [loadPlaces, places]);

  return (
    <div>
      <FilterButton />
      <div className="home-photo">
        <p className="home-photo__text">
          The Earth offers endless destinations to discover. Most of them don't
          seem out of this world
        </p>
      </div>
      <h1 className="home-title">Entradas recientes</h1>
      <PlacesList places={placesList} />
    </div>
  );
};

export default HomePage;
