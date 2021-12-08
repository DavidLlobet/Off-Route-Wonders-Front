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
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">África</button>
        <div className="dropdown-content">
          {/* <a href="Albania" className="header__country">
            Albania
          </a> */}
          <a href="Alemania" className="header__country">
            Alemania
          </a>
          <a href="Austria" className="header__country">
            Austria
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">Américas</button>
        <div className="dropdown-content">
          {/* <a href="Albania" className="header__country">
            Albania
          </a> */}
          <a href="Alemania" className="header__country">
            Alemania
          </a>
          <a href="Austria" className="header__country">
            Austria
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">Asia</button>
        <div className="dropdown-content">
          {/* <a href="Albania" className="header__country">
            Albania
          </a> */}
          <a href="Alemania" className="header__country">
            Alemania
          </a>
          <a href="Austria" className="header__country">
            Austria
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn header__continent">Oceania</button>
        <div className="dropdown-content">
          {/* <a href="Albania" className="header__country">
            Albania
          </a> */}
          <a href="Alemania" className="header__country">
            Alemania
          </a>
          <a href="Austria" className="header__country">
            Austria
          </a>
        </div>
      </div>
      <LoginButton />
      {!isAuthenticated ? "" : <LogoutButton onClick={onClickLogout} />}
    </header>
  );
};

export default Header;
