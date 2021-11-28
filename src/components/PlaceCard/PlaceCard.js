import PropTypes from "prop-types";

const PlaceCard = ({ place }) => {
  return (
    <li title="place-item" className="card">
      <p className="card__title">{place.title}</p>
      <img
        src={place.images[0]}
        alt={place.title}
        className="card__photo"
        width="100"
        height="100"
      />
      <p className="card__info">
        Autor:
        {place.author.username}-{place.date}
      </p>
    </li>
  );
};

export default PlaceCard;

PlaceCard.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    author: PropTypes.object.isRequired,
    date: PropTypes.string,
  }),
};
