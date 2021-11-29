import PropTypes from "prop-types";
import "./PlaceCard.scss";

const PlaceCard = ({ place }) => {
  return (
    <div title="place-item" className="place">
      <p className="place">
        {place.title} ({place.country.name})
      </p>
      <img
        src={place.images[0]}
        alt={place.title}
        className="place"
        width="272"
        height="178"
      />
      <p className="place__info">
        Autor: {place.author.username} - {place.date}
      </p>
    </div>
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
