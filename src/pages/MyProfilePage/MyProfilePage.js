import { useEffect } from "react";
import CreateButton from "../../components/CreateButton/CreateButton";
import usePlaces from "../../hooks/usePlaces";
import PlacesByAuthorList from "../../components/PlacesByAuthorList/PlacesByAuthorList";
import "./MyProfilePage.scss";
import ModifyButton from "../../components/ModifyButton/ModifyButton";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

const MyProfilePage = () => {
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
        <CreateButton />
      </div>
    </div>
  );
};

export default MyProfilePage;
