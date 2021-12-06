import PropTypes from "prop-types";
import usePlaces from "../../hooks/usePlaces";
import "./PlacesByAuthorList.scss";
import PlaceByAuthorCard from "../PlaceByAuthorCard/PlaceByAuthorCard";
import { useSelector } from "react-redux";
import CreateButton from "../CreateButton/CreateButton";
import jwtDecode from "jwt-decode";

const PlacesByAuthorList = ({ places }) => {
  let { isAuthenticated } = useSelector((store) => store.user);
  const tokenUser = localStorage.getItem("user");
  const loggedUser = jwtDecode(tokenUser);
  if (tokenUser) {
    isAuthenticated = true;
  }
  const { deletePlace } = usePlaces();

  const deleteOnClick = (id) => {
    deletePlace(id);
  };

  return (
    <>
      {isAuthenticated === true && (
        <p className="user">{loggedUser.username}</p>
      )}
      <CreateButton />
      <p className="title">Mis lugares</p>
      <div title="places-list" className="list">
        {places.map((place) => (
          <PlaceByAuthorCard
            key={place.id}
            place={place}
            onClick={deleteOnClick}
          />
        ))}
      </div>
    </>
  );
};

export default PlacesByAuthorList;

PlacesByAuthorList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string.isRequired),
      author: PropTypes.object.isRequired,
      date: PropTypes.string,
    })
  ).isRequired,
};
