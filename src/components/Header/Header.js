import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./Header.scss";

const Header = () => {
  const { isAuthenticated } = useSelector((store) => store.user);

  return (
    <header title="header" className="header">
      <Link className="header__logo" to="home">
        Off Route Wonders
      </Link>
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
