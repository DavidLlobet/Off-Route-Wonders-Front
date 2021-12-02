import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MyProfilePage from "./MyProfilePage";

describe("Given a MyProfilePage component", () => {
  describe("When it renders", () => {
    test("Then it should render a card with the title 'Mi perfil'", () => {
      render(
        <Router>
          <MyProfilePage />
        </Router>
      );
      const title = screen.getByText("Mi perfil");

      expect(title).toBeInTheDocument();
    });
  });
});
