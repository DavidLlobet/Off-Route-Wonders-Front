import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(
        <Router>
          <Header />;
        </Router>
      );
      const header = screen.getByTitle("header");

      expect(header).toHaveClass("header");
    });
  });
});
