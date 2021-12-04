import PropTypes from "prop-types";
import usePlaces from "../../hooks/usePlaces";
import "./PlacesByAuthorList.scss";
import PlaceByAuthorCard from "../PlaceByAuthorCard/PlaceByAuthorCard";
import { useSelector } from "react-redux";
import CreateButton from "../CreateButton/CreateButton";

const PlacesByAuthorList = ({ places }) => {
  const user = useSelector(({ user }) => user);
  const { deletePlace } = usePlaces();

  const deleteOnClick = (id) => {
    deletePlace(id);
  };

  return (
    <>
      <p className="user">{user.user.username}</p>
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
