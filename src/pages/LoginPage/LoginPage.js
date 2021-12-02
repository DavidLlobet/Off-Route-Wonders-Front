import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const LoginPage = () => {
  return (
    <>
      <div className="header-line"></div>
      <div className="container">
        <LoginForm />
        <RegisterForm />
      </div>
    </>
  );
};

export default LoginPage;
