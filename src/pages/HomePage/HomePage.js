import { useEffect } from "react";
import FilterButton from "../../components/FilterButton/FilterButton";
import LoginForm from "../../components/LoginForm/LoginForm";
import PlacesList from "../../components/PlacesList/PlacesList";
import usePlaces from "../../hooks/usePlaces";

const HomePage = () => {
  const { places, loadPlaces } = usePlaces();

  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);

  return (
    <div>
      <LoginForm />
      <FilterButton />
      <PlacesList places={places} />
    </div>
  );
};

export default HomePage;
