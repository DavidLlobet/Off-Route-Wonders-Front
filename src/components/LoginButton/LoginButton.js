import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LoginButton.scss";

const LoginButton = () => {
  const { isAuthenticated } = useSelector((store) => store.user);
  return !isAuthenticated ? (
    <Link className="login" to="login">
      Entra
    </Link>
  ) : (
    <Link className="login" to="my-profile">
      My perfil
    </Link>
  );
};

export default LoginButton;
