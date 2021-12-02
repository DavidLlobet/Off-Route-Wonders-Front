import "./HomePage.scss";
import { useEffect } from "react";
import FilterButton from "../../components/FilterButton/FilterButton";
import PlacesList from "../../components/PlacesList/PlacesList";
import usePlaces from "../../hooks/usePlaces";

const HomePage = () => {
  const { places, loadPlaces } = usePlaces();

  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);

  return (
    <div>
      <FilterButton />
      <div className="home-photo">
        <p className="home-photo__text">
          The Earth offers endless destinations to discover. Most of them don't
          seem out of this world
        </p>
      </div>
      <PlacesList places={places} />
    </div>
  );
};

export default HomePage;
