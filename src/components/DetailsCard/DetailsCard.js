import { useEffect, useState } from "react";
import { useParams } from "react-router";
import usePlace from "../../hooks/usePlace";
import "./DetailsCard.scss";

const DetailsCard = ({ place }) => {
  const { updatePlace } = usePlace();
  // const { id } = useParams();

  const [comment, setComment] = useState("");

  // const initialData = {
  //   comments: "",
  // };

  // const [placeData, setPlaceData] = useState(initialData);
  // useEffect(() => {
  //   setPlaceData(place);
  // }, [place]);

  const [isDisable, setIsDisable] = useState(true);
  const checkForm = () => {
    if (comment !== "") {
      setIsDisable(false);
    }
  };

  const changePlaceData = (event) => {
    setComment(event.target.value);
    checkForm();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    place.comments.push(comment);
    const userComment = {
      comments: place.comments,
    };
    updatePlace(userComment, place.id);
  };

  return (
    <div className="details-card">
      <h1 className="details-card__title">
        {place.title} ({place?.country?.name})
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
      <form
        className="details-card__form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <label htmlFor="comment"></label>
        <input
          type="text"
          id="comments"
          placeholder="Escribe tu comentario aquí"
          name="comments"
          className="details-card__form-input"
          value={comment}
          required
          onChange={changePlaceData}
        ></input>
        <button
          type="submit"
          className="details-card__button"
          disabled={isDisable}
        >
          Validar
        </button>
      </form>
      <div className="details-card__comments-container">
        {/* {place.comments.map((comment) => (
          <div />
        ))} */}
      </div>
    </div>
  );
};

export default DetailsCard;
