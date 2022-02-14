import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import usePlace from "../../hooks/usePlace";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "../../icon/map-marker-icon.png";
import "./DetailsCard.scss";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../../redux/actions/actionCreators";

const DetailsCard = ({ place }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    if (token) {
      dispatch(loginUserAction(jwtDecode(token.token)));
    }
  }, [dispatch]);

  let { isAuthenticated, user } = useSelector((store) => store.user);
  const tokenUser = localStorage.getItem("user");

  if (tokenUser) {
    isAuthenticated = true;
  }
  const { updatePlace } = usePlace();

  const [comment, setComment] = useState("");

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
      country: place.country.name,
      comments: place.comments,
    };
    updatePlace(userComment, place.id);
  };

  const iconMarker = L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: [50, 50],
  });

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
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

        <MapContainer
          center={{
            lat: place.coordinates?.latitude,
            lng: place.coordinates?.longitude,
          }}
          zoom={3}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={{
              lat: place.coordinates?.latitude,
              lng: place.coordinates?.longitude,
            }}
            icon={iconMarker}
          />
        </MapContainer>
        <p className="details-card__text">{place.text}</p>

        <div className="details-card__separator"></div>
        <p className="details-card__comments">Comentarios</p>
        {isAuthenticated === true && (
          <>
            <form
              className="details-card__form"
              noValidate
              autoComplete="off"
              onSubmit={onSubmit}
            >
              <textarea
                name="comment"
                className="details-card__textarea"
                maxLength="150"
                rows="4"
                cols="37"
                id="text"
                value={comment}
                onChange={changePlaceData}
              ></textarea>
              <button
                type="submit"
                className="details-card__button"
                disabled={isDisable}
              >
                Publica
              </button>
            </form>{" "}
            <div className="details-card__separator"></div>
          </>
        )}
        {isAuthenticated === false && (
          <p>Regístrate para poder comentar las publicaciones</p>
        )}

        <div className="details-card__comments-container">
          {place.comments.map((comment) => (
            <div key={place.id}>
              <p className="details-card__comment">{comment}</p>

              <p className="details-card__comment-author">{user.username}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
