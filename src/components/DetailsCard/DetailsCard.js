import "./DetailsCard.scss";

const DetailsCard = ({ place }) => {
  return (
    <div className="details-card">
      <h1 className="details-card__title">
        {place.title} ({place.country.name})
      </h1>
      <p className="details-card__author">Autor: {place.author.username}</p>
      <img
        src={place.images[0]}
        alt={place.title}
        className="details-card__image"
        width="272"
        height="178"
      />
      <div className="details-card__map"></div>
      <p className="details-card__text">{place.text}</p>
      <div className="details-card__separator"></div>
      <p className="details-card__comments">Comentarios</p>
    </div>
  );
};

export default DetailsCard;
