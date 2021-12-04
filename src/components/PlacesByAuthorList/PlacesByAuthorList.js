import PropTypes from "prop-types";

const PlacesByAuthorList = ({ places }) => {
  return (
    <>
      <p>Mis lugares</p>
      <div title="places-list" className="list">
        {places.map((place) => (
          <PlaceByAuthorCard key={place.id} place={place} />
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
