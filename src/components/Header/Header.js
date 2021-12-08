import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useNavigate } from "react-router";
import "./Header.scss";

const Header = () => {
  let { isAuthenticated } = useSelector((store) => store.user);
  const tokenUser = localStorage.getItem("user");
  if (tokenUser) {
    isAuthenticated = true;
  }
  const { logoutUser } = useUser();
  let navigate = useNavigate();

  const onClickLogout = async (event) => {
    event.preventDefault();
    logoutUser();
    navigate("/home");
  };

  const onClick = (event, id) => {
    event.preventDefault();
    navigate(`/country/${id}`);
  };

  return (
    <header title="header" className="header">
      <Link className="logo" to="home">
        Off Route Wonders
      </Link>
      <div className="dropdown">
        <button className="dropbtn header__continent">Europa</button>
        <div className="dropdown-content">
          <a
            href="61a104bcec1d9f99c7672ca4"
            className="header__country"
            onClick={(event) => onClick(event, "61a104bcec1d9f99c7672ca4")}
          >
            Albania
          </a>
          <a href="Alemania" className="header__country">
            Alemania
          </a>
          <a href="Austria" className="header__country">
            Austria
          </a>
          <a href="Bélgica" className="header__country">
            Bélgica
          </a>
          <a href="Bielorrusia" className="header__country">
            Bielorrusia
          </a>
          <a href="Bosnia-Herzegovina" className="header__country">
            Bosnia-Herzegovina
          </a>
          <a href="Bulgaria" className="header__country">
            Bulgaria
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">África</button>
        <div className="dropdown-content">
          <a href="Angola" className="header__country">
            Angola
          </a>
          <a href="Argelia" className="header__country">
            Argelia
          </a>
          <a href="Benín" className="header__country">
            Benín
          </a>
          <a href="Botsuana" className="header__country">
            Botsuana
          </a>
          <a href="Burkina-Faso" className="header__country">
            Burkina-Faso
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">Américas</button>
        <div className="dropdown-content">
          <a href="Argentina" className="header__country">
            Argentina
          </a>
          <a href="Alemania" className="header__country">
            Alemania
          </a>
          <a href="Bahamas" className="header__country">
            Bahamas
          </a>
          <a href="Barbados" className="header__country">
            Barbados
          </a>
          <a href="Belice" className="header__country">
            Belice
          </a>
          <a href="Bolivia" className="header__country">
            Bolivia
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">Asia</button>
        <div className="dropdown-content">
          <a href="Afganistan" className="header__country">
            Afganistán
          </a>
          <a href="Arabia Saudita" className="header__country">
            Arabia Saudita
          </a>
          <a href="Armenia" className="header__country">
            Armenia
          </a>
          <a href="Azerbaiyán" className="header__country">
            Azerbaiyán
          </a>
          <a href="Bangladés" className="header__country">
            Bangladés
          </a>
          <a href="Baréin" className="header__country">
            Baréin
          </a>
          <a href="Filipinas" className="header__country">
            Filipinas
          </a>
          <a href="Vietnam" className="header__country">
            Vietnam
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">Oceania</button>
        <div className="dropdown-content">
          <a href="Australia" className="header__country">
            Australia
          </a>
          <a href="Fiyi" className="header__country">
            Fiyi
          </a>
          <a href="Islas Marshall" className="header__country">
            Islas Marshall
          </a>
          <a href="Islas Salomón" className="header__country">
            Islas Salomón
          </a>
          <a href="Islas Marshall" className="header__country">
            Islas Marshall
          </a>
          <a href="Kiribati" className="header__country">
            Kiribati
          </a>
        </div>
      </div>
      <LoginButton />
      {!isAuthenticated ? "" : <LogoutButton onClick={onClickLogout} />}
    </header>
  );
};

export default Header;
