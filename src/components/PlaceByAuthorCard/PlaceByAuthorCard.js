import PropTypes from "prop-types";
import { useNavigate } from "react-router";

import "./PlaceByAuthorCard.scss";

const PlaceByAuthorCard = ({ place, onClick }) => {
  let date = new Date(place.date);
  const navigate = useNavigate();
  const goToUpdatePage = (placeId) => {
    navigate(`/my-profile/update/${placeId}`);
  };
  const loadOnClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <div title="place-item" className="place-card">
        <div className="place-card__info">
          <div className="place-card__text">
            <p className="place-card__name">{place.title}</p>
            <p className="place-card__name">({place.country.name})</p>
            <p className="place-card__date">
              {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
            </p>
          </div>
          <img
            src={place.images[0]}
            alt={place.title}
            className="place-card__image"
            width="110"
            height="70"
            onClick={() => loadOnClick(place.id)}
          />
        </div>
        <div className="place-card__buttons">
          <button
            className="place-card__button"
            onClick={() => goToUpdatePage(place.id)}
          >
            Modificar
          </button>
          <button
            className="place-card__button"
            onClick={() => onClick(place.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
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
