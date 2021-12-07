// import PropTypes from "prop-types";
import "./PlaceCard.scss";

const PlaceCard = ({ place, onClick }) => {
  let date = new Date(place.date);

  return (
    <div title="place-item" className="place">
      <p className="place__title">
        {place.title} ({place?.country?.name})
      </p>
      <img
        src={place.images[0]}
        alt={place.title}
        className="place__image"
        width="272"
        height="178"
        onClick={() => onClick(place.id)}
      />
      <p className="place__info">
        Autor: {place.author.username} - {date.getDate()}-{date.getMonth() + 1}-
        {date.getFullYear()}
      </p>
    </div>
  );
};

export default PlaceCard;

// PlaceCard.propTypes = {
//   place: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string.isRequired),
//     author: PropTypes.object.isRequired,
//     date: PropTypes.string,
//   }),
// };
