import LoginButton from "../LoginButton/LoginButton";
import "./Header.scss";

const Header = () => {
  return (
    <header title="header" className="header">
      <p className="header__logo">Off Route Wonders</p>
      <LoginButton />
    </header>
  );
};

export default Header;
