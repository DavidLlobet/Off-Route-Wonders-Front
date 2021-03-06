import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CountryPage from "./pages/CountryPage/CountryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import CreateFormPage from "./pages/CreateFormPage/CreateFormPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import UpdateFormPage from "./pages/UpdateFormPage/UpdateFormPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/details/:id" element={<DetailsPage />} />
        <Route exact path="/country/:id" element={<CountryPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/my-profile" element={<MyProfilePage />} />
        <Route exact path="/my-profile/create" element={<CreateFormPage />} />
        <Route
          exact
          path="/my-profile/update/:id"
          element={<UpdateFormPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
