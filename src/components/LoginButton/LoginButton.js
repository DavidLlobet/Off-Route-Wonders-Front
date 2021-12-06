import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LoginButton.scss";

const LoginButton = () => {
  let { isAuthenticated } = useSelector((store) => store.user);
  const tokenUser = localStorage.getItem("user");
  if (tokenUser) {
    isAuthenticated = true;
  }
  return !isAuthenticated ? (
    <Link className="login" to="login">
      Entra
    </Link>
  ) : (
    <Link className="login" to="my-profile">
      Mi perfil
    </Link>
  );
};

export default LoginButton;
