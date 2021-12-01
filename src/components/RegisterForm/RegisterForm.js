import { useState } from "react";
import useUser from "../../hooks/useUser";

const RegisterForm = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const { registerUser } = useUser();

  const onSubmit = async (event) => {
    event.preventDefault();
    registerUser(userData);
  };

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
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
          onChange={changeUserData}
        ></input>
        <button type="submit" className="login-form__button">
          Validar
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
