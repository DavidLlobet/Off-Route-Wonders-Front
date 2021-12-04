import PropTypes from "prop-types";
import DeleteButton from "../DeleteButton/DeleteButton";
import ModifyButton from "../ModifyButton/ModifyButton";

const PlaceByAuthorCard = ({ place }) => {
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
      <ModifyButton />
      <DeleteButton />
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
