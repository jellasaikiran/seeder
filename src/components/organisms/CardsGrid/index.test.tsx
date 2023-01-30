import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardsGrid from "./index";

describe("Cards Grid Tests", () => {
  it("renders CardsGrid component", () => {
    const { container } = render(<CardsGrid />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("Checking styles", () => {
    render(<CardsGrid />);
    const grid = screen.getByTestId("cards-grid");
    expect(grid).toHaveStyle(
      `background-color: rgb(32,31,36);border: 0.163rem solid #28272b;`
    );
  });
});
