import CreateButton from "../../components/CreateButton/CreateButton";
import "./MyProfilePage.scss";

const MyProfilePage = () => {
  return (
    <div className="profile">
      <div className="profile__card">
        <p className="profile__title">Mi perfil</p>
        <div className="profile__separator"></div>
        <CreateButton />
      </div>
    </div>
  );
};

export default MyProfilePage;
