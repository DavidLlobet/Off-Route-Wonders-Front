import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FilterButton from "./FilterButton";

describe("Given a FilterButton component", () => {
  describe("When it renders", () => {
    test("Then it should render a list of buttons and the country name 'Albania'", () => {
      render(
        <Router>
          <FilterButton />;
        </Router>
      );
      const button = screen.getByText("Albania");

      expect(button).toBeInTheDocument();
    });
  });
});
