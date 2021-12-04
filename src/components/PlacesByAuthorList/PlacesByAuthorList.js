import PropTypes from "prop-types";
import usePlaces from "../../hooks/usePlaces";
import PlaceByAuthorCard from "../PlaceByAuthorCard/PlacesByAuthorCard";

const PlacesByAuthorList = ({ places }) => {
  const { deletePlace } = usePlaces();

  const deleteOnClick = (id) => {
    deletePlace(id);
  };

  return (
    <>
      <p>Mis lugares</p>
      <div title="places-list" className="list">
        {places.map((place) => (
          <PlaceByAuthorCard
            key={place.id}
            place={place}
            onClick={deleteOnClick}
          />
        ))}
      </div>
    </>
  );
};

export default PlacesByAuthorList;

PlacesByAuthorList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string.isRequired),
      author: PropTypes.object.isRequired,
      date: PropTypes.string,
    })
  ).isRequired,
};
