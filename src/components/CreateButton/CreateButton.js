import { Link } from "react-router-dom";
import "./CreateButton.scss";

const CreateButton = () => {
  return (
    <Link className="button" to="/my-profile/create">
      Crear nuevo lugar
    </Link>
  );
};

export default CreateButton;
