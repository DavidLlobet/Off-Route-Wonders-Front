import { useSelector } from "react-redux";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./Header.scss";

const Header = () => {
  const { isAuthenticated } = useSelector((store) => store.user);

  return (
    <header title="header" className="header">
      <p className="header__logo">Off Route Wonders</p>
      <LoginButton />
      {!isAuthenticated ? "" : <LogoutButton />}
    </header>
  );
};

export default Header;
