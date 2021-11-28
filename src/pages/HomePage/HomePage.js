import { useEffect } from "react";
import PlacesList from "../../components/PlacesList/PlacesList";
import usePlaces from "../../hooks/usePlaces";

const HomePage = () => {
  const { places, loadPlaces } = usePlaces();

  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);

  return (
    <div>
      <PlacesList places={places} />
    </div>
  );
};

export default HomePage;
