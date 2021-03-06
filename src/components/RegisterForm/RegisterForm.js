import "./RegisterForm.scss";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import { Toaster } from "react-hot-toast";

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
      <p className="register-title">
        ¿Todavía no estás registrado? ¿A qué esperas?{" "}
      </p>
      <form
        className="register-form"
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
          className="register-form__input"
          required
          onChange={changeUserData}
        ></input>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Introduce una contraseña"
          name="password"
          className="register-form__input"
          required
          onChange={changeUserData}
        ></input>
        <button type="submit" className="register-form__button">
          Validar
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default RegisterForm;
