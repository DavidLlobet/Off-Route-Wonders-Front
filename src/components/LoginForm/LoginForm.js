import "./LoginForm.scss";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";

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
    }, 1000);
  };

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <p className="title">
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
          id="username"
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
          id="password"
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
      <div className="line"></div>
    </>
  );
};

export default LoginForm;
