import { useEffect } from "react";
import { useParams } from "react-router";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import FilterButton from "../../components/FilterButton/FilterButton";
import usePlace from "../../hooks/usePlace";

const DetailsPage = () => {
  const { place, loadPlace } = usePlace();
  console.log(place);

  const { id } = useParams();
  useEffect(() => {
    loadPlace(id);
  }, [loadPlace, id]);

  return (
    <>
      <FilterButton />
      {place.title && <DetailsCard place={place} />}
    </>
  );
};

export default DetailsPage;
