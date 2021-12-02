import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CountryPage from "./pages/CountryPage/CountryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/country" element={<CountryPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/my-profile" element={<MyProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
