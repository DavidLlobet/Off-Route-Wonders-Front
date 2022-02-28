import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useNavigate } from "react-router";
import countries from "../../countries";
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
            onClick={(event) => onClick(event, countries.albania)}
          >
            Albania
          </a>
          <a
            href="Alemania"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Alemania
          </a>
          <a
            href="Austria"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Austria
          </a>
          <a
            href="Bélgica"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Bélgica
          </a>
          <a
            href="Bielorrusia"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Bielorrusia
          </a>
          <a
            href="Bosnia-Herzegovina"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Bosnia-Herzegovina
          </a>
          <a
            href="Bulgaria"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Bulgaria
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">África</button>
        <div className="dropdown-content">
          <a
            href="Angola"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Angola
          </a>
          <a
            href="Argelia"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Argelia
          </a>
          <a
            href="Benín"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Benín
          </a>
          <a
            href="Botsuana"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Botsuana
          </a>
          <a
            href="Burkina-Faso"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Burkina-Faso
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">Américas</button>
        <div className="dropdown-content">
          <a
            href="Argentina"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Argentina
          </a>

          <a
            href="Bahamas"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Bahamas
          </a>
          <a
            href="Barbados"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Barbados
          </a>
          <a
            href="Belice"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Belice
          </a>
          <a
            href="Bolivia"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Bolivia
          </a>
          <a
            href="Brasil"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Brasil
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">Asia</button>
        <div className="dropdown-content">
          <a
            href="Afganistan"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Afganistán
          </a>
          <a
            href="Arabia Saudita"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Arabia Saudita
          </a>
          <a
            href="Armenia"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Armenia
          </a>
          <a
            href="Azerbaiyán"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Azerbaiyán
          </a>
          <a
            href="Bangladés"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Bangladés
          </a>
          <a
            href="Baréin"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Baréin
          </a>
          <a
            href="Filipinas"
            className="header__country"
            onClick={(event) => onClick(event, countries.filipinas)}
          >
            Filipinas
          </a>
          <a
            href="Vietnam"
            className="header__country"
            onClick={(event) => onClick(event, countries.vietnam)}
          >
            Vietnam
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">Oceania</button>
        <div className="dropdown-content">
          <a
            href="Australia"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Australia
          </a>
          <a
            href="Fiyi"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Fiyi
          </a>
          <a
            href="Islas Marshall"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Islas Marshall
          </a>
          <a
            href="Islas Salomón"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Islas Salomón
          </a>
          <a
            href="Islas Marshall"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
            Islas Marshall
          </a>
          <a
            href="Kiribati"
            className="header__country"
            onClick={(event) => event.preventDefault()}
          >
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
