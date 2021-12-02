import { Link } from "react-router-dom";
import "./CreateButton.scss";

const CreateButton = () => {
  return (
    <Link className="create-button" to="my-profile/create">
      Crear nuevo lugar
    </Link>
  );
};

export default CreateButton;
