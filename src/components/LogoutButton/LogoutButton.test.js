import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogoutButton from "./LogoutButton";

describe("Given a LoginButton component", () => {
  describe("When it renders", () => {
    test("Then it should render a button with text in it", () => {
      render(<LogoutButton />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
  describe("When it receives a Logout function through props and the button is clicked", () => {
    test("Then it should call the function", () => {
      const onClickFunction = jest.fn();

      render(<LogoutButton onClick={onClickFunction} />);

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(onClickFunction).toHaveBeenCalled();
    });
  });
});
