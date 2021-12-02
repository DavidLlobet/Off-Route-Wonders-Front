import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CreateButton from "./CreateButton";

describe("Given a CreateButton component", () => {
  describe("When it renders", () => {
    test("Then it should render a button with the text 'Crear nuevo lugar'", () => {
      render(
        <Router>
          <CreateButton />;
        </Router>
      );
      const button = screen.getByText("Crear nuevo lugar");

      expect(button).toBeInTheDocument();
    });
  });
});
