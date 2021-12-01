import { Link } from "react-router-dom";
import "./LoginButton.scss";

const LoginButton = () => {
  return (
    <Link className="login" to="login">
      Entra
    </Link>
  );
};

export default LoginButton;
