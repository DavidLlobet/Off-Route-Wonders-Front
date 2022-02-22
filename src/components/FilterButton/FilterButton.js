import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { useNavigate } from "react-router";
import "./FilterButton.scss";
import countries from "../../countries";

const FilterButton = () => {
  let navigate = useNavigate();

  const onClick = (id) => {
    navigate(`/country/${id}`);
  };
  return (
    <div className="dropdown d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
      <button
        className="btn btn-info dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item disabled" type="button">
          Europa
        </button>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onClick(countries.albania)}
        >
          Albania
        </button>
        <button className="dropdown-item" type="button">
          Alemania
        </button>
        <button className="dropdown-item" type="button">
          Austria
        </button>
        <button className="dropdown-item" type="button">
          Bélgica
        </button>
        <button className="dropdown-item" type="button">
          Bielorrusia
        </button>
        <button className="dropdown-item disabled" type="button">
          África
        </button>
        <button className="dropdown-item" type="button">
          Angola
        </button>
        <button className="dropdown-item" type="button">
          Argelia
        </button>
        <button className="dropdown-item" type="button">
          Benín
        </button>
        <button className="dropdown-item" type="button">
          Botsuana
        </button>
        <button className="dropdown-item" type="button">
          Burkina Faso
        </button>
        <button className="dropdown-item disabled" type="button">
          Asia
        </button>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onClick(countries.filipinas)}
        >
          Filipinas
        </button>
        <button
          className="dropdown-item"
          type="button"
          onClick={() => onClick(countries.vietnam)}
        >
          Vietnam
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
