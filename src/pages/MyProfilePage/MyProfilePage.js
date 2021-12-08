import { useEffect } from "react";
import usePlaces from "../../hooks/usePlaces";
import PlacesByAuthorList from "../../components/PlacesByAuthorList/PlacesByAuthorList";
import "./MyProfilePage.scss";

const MyProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { places, loadPlacesByAuthor } = usePlaces();

  useEffect(() => {
    loadPlacesByAuthor();
  }, [loadPlacesByAuthor]);

  return (
    <div className="profile">
      <div className="profile__card">
        <p className="profile__title">Mi perfil</p>
        <div className="profile__separator"></div>
        <PlacesByAuthorList places={places} />
      </div>
    </div>
  );
};

export default MyProfilePage;
