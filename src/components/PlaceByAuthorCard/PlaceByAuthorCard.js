import PropTypes from "prop-types";
import "./PlaceByAuthorCard.scss";

const PlaceByAuthorCard = ({ place, onClick }) => {
  let date = new Date(place.date);

  return (
    <>
      <div title="place-item" className="place-card">
        <div className="place-card__info">
          <div className="place-card__text">
            <p className="place-card__name">
              {place.title} ({place.country.name})
            </p>
            <p className="place-card__date">
              {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
            </p>
          </div>
          <img
            src={place.images[0]}
            alt={place.title}
            className="place-card__image"
            width="90"
            height="50"
          />
        </div>
        <div className="place-card__buttons">
          <button className="place-card__button">Modificar</button>
          <button
            className="place-card__button"
            onClick={() => onClick(place.id)}
          >
            Eliminar
          </button>
        </div>
      </div>

      {/* <p className="place__title">
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
      </div> */}
    </>
  );
};

export default PlaceByAuthorCard;

PlaceByAuthorCard.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    author: PropTypes.object.isRequired,
    // date: PropTypes.string,
  }),
  // onClick: PropTypes.func.isRequired,
};
