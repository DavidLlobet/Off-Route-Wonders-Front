import { render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton";

describe("Given a LoginButton component", () => {
  describe("When it renders", () => {
    test("Then it should render a button with text in it", () => {
      render(<LoginButton />);
      const button = screen.getByText("Entra");

      expect(button).toBeInTheDocument();
    });
  });
});
