import useUser from "../../hooks/useUser";
import "./LogoutButton.scss";

const LogoutButton = () => {
  const { logoutUser } = useUser();

  const onClickLogout = async (event) => {
    event.preventDefault();
    logoutUser();
  };

  return (
    <button className="logout" onClick={onClickLogout}>
      <img src="./logout.png" alt="logout" width="30" height="30"></img>
    </button>
  );
};

export default LogoutButton;
