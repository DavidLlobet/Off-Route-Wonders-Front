import { useSelector } from "react-redux";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./Header.scss";

const Header = () => {
  const { isAuthenticated } = useSelector((store) => store.user);

  return (
    <header title="header" className="header">
      <p className="header__logo">Off Route Wonders</p>
      <p className="header__continent">Europa</p>
      <p className="header__continent">África</p>
      <p className="header__continent">Américas</p>
      <p className="header__continent">Asia</p>
      <p className="header__continent">Oceania</p>

      <LoginButton />
      {!isAuthenticated ? "" : <LogoutButton />}
    </header>
  );
};

export default Header;
