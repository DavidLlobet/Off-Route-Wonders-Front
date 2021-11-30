import "./LoginForm.scss";
import { useState } from "react";
import useUser from "../../hooks/useUser";

const LoginForm = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const { loginUser } = useUser();

  const onSubmit = async (event) => {
    event.preventDefault();
    loginUser(userData);
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
      <p className="title">¿Todavía no estás registrado? ¿A qué esperas? </p>
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
          placeholder="Introduce un nombre de usuario"
          name="username"
          className="login-form__input"
          required
          onChange={changeUserData}
        ></input>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Introduce una contraseña"
          name="password"
          className="login-form__input"
          required
          onChange={changeUserData}
        ></input>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder="Introduce un correo electrónico"
          name="password"
          className="login-form__input"
          required
          onChange={changeUserData}
        ></input>
        <button type="submit" className="login-form__button">
          Validar
        </button>
      </form>
    </>
  );
};

export default LoginForm;
