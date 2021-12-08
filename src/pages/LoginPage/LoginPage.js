import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="header-line"></div>
      <LoginForm />
      <RegisterForm />
    </>
  );
};

export default LoginPage;
