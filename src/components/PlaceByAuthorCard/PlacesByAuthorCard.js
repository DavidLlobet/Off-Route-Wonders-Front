import PropTypes from "prop-types";

const PlaceByAuthorCard = ({ place, onClick }) => {
  let date = new Date(place.date);

  return (
    <div title="place-item" className="place">
      <p className="place__title">
        {place.title} ({place.country.name})
      </p>
      <img
        src={place.images[0]}
        alt={place.title}
        className="place__image"
        width="50"
        height="40"
      />
      <p className="place__info">
        {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
      </p>
      <button className="place__button">Modificar</button>
      <button className="place__button" onClick={() => onClick(place.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default PlaceByAuthorCard;

PlaceByAuthorCard.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    author: PropTypes.object.isRequired,
    date: PropTypes.string,
  }),
};
