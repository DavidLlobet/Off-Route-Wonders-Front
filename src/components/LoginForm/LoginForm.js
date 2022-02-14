import "./LoginForm.scss";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const { loginUser } = useUser();
  let navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    loginUser(userData);
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const changeUserData = (event) => {
    if (event.target.id === "password-login") {
      setUserData({
        ...userData,
        password: event.target.value,
      });
    }
    if (event.target.id === "username-login") {
      setUserData({
        ...userData,
        username: event.target.value,
      });
    }
  };

  return (
    <>
      <div className="login-container">
        <p className="login-container__title">
          Logéate para compartir tus experiencias por el mundo
        </p>
        <form
          className="login-form"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username-login"
            placeholder="Introduce tu nombre de usuario"
            name="username"
            className="login-form__input"
            value={userData.username}
            required
            onChange={changeUserData}
          ></input>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password-login"
            placeholder="Introduce tu contraseña"
            name="password"
            className="login-form__input"
            value={userData.password}
            required
            onChange={changeUserData}
          ></input>
          <button type="submit" className="login-form__button">
            Validar
          </button>
        </form>
        <Toaster />
        <div className="login-container__line"></div>
      </div>
    </>
  );
};

export default LoginForm;
