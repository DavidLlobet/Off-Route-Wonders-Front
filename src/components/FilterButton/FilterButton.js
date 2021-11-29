import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { DropdownButton, MenuItem } from "react-bootstrap";
import "./FilterButton.scss";

const FilterButton = () => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-info dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button">
          Albania
        </button>
        <button class="dropdown-item" type="button">
          Alemania
        </button>
        <button class="dropdown-item" type="button">
          Austria
        </button>
        <button class="dropdown-item" type="button">
          Bélgica
        </button>
        <button class="dropdown-item" type="button">
          Bielorrusia
        </button>
        <button class="dropdown-item" type="button">
          Bielorrusia
        </button>
        <button class="dropdown-item" type="button">
          Bielorrusia
        </button>
        <button class="dropdown-item" type="button">
          Bielorrusia
        </button>
        <button class="dropdown-item" type="button">
          Bielorrusia
        </button>
        <button class="dropdown-item" type="button">
          Bielorrusia
        </button>
        <button class="dropdown-item" type="button">
          Bielorrusia
        </button>
      </div>
    </div>
  );
};

export default FilterButton;

{
  /* <DropdownButton */
}
//   bsStyle="default"
//   bsSize="small"
//   style={{ maxHeight: "28px" }}
//   title={"Qty"}
//   key={1}
//   id="dropdown-size-small"
// >
//   <MenuItem eventKey="1">Albania</MenuItem>
//   <MenuItem eventKey="2">Alemania</MenuItem>
//   <MenuItem eventKey="3" active>
//     Austria
//   </MenuItem>
//   <MenuItem divider />
//   <MenuItem eventKey="4">Separated link</MenuItem>
// </DropdownButton>
