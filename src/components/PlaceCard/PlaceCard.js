const PlaceCard = ({ title, images, author, date }) => {
  return (
    <li className="card">
      <p className="card__title">{title}</p>
      <img src={images[0]} alt={title} className="card__photo" />
      <p className="card__info">
        Autor:
        {author.username}-{date}
      </p>
    </li>
  );
};

export default PlaceCard;
