import { render, screen } from "@testing-library/react";
import { Banner } from ".";

it("Check for Banner", () => {
  render(<Banner />);
  const TextElement = screen.getByTestId("banner");
  expect(TextElement).toBeInTheDocument();
});
