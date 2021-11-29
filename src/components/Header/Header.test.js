import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      render(<Header />);
      const header = screen.getByTitle("header");

      expect(header).toHaveClass("header");
    });
  });
});
