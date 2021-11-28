import PlaceCard from "../PlaceCard/PlaceCard";
import PropTypes from "prop-types";

const PlacesList = ({ places }) => {
  return (
    <>
      <h1>Entradas recientes</h1>
      <ul title="places-list" className="list">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </ul>
    </>
  );
};

export default PlacesList;

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
};
