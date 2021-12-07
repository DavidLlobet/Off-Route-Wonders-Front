import "./LogoutButton.scss";

const LogoutButton = ({ onClick }) => {
  return (
    <button className="logout" onClick={onClick}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/off-route-wonders.appspot.com/o/logout.png?alt=media&token=51e05182-6c90-4089-8baa-45cef853aac4"
        alt="logout"
        width="30"
        height="30"
      ></img>
    </button>
  );
};

export default LogoutButton;
