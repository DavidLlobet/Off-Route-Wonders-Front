import PlaceCard from "../PlaceCard/PlaceCard";
import PropTypes from "prop-types";
import "./PlaceList.scss";

const PlacesList = ({ places }) => {
  return (
    <>
      <h1>Entradas recientes</h1>
      <div className="separation">
        <div className="separation__line"></div>
      </div>
      <div title="places-list" className="list">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </>
  );
};

export default PlacesList;

PlacesList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string.isRequired),
      author: PropTypes.object.isRequired,
      date: PropTypes.string,
    })
  ).isRequired,
};
