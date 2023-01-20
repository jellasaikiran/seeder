import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavigationItem } from ".";
import { theme } from "../../../theme/theme";

describe("Navigation Item tests", () => {
  it("renders the menuItem", () => {
    render(
      <NavigationItem
        variant={"functional"}
        icon={"../../../../public/icons/home-1.svg"}
        iconSelected={"../../../../public/icons/home-2.svg"}
        selected={false}
        text={"Home"}
      />
    );

    const MuiElement = screen.getByRole("img");
    expect(MuiElement).toBeInTheDocument();

    const text = screen.getByText("Home");
    expect(text).toBeInTheDocument();
  });

  it("renders the menuItem when selected", () => {
    render(
      <NavigationItem
        variant={"functional"}
        icon={"../../../../public/icons/home-1.svg"}
        iconSelected={"../../../../public/icons/home-2.svg"}
        selected={true}
        text={"Home"}
      />
    );

    const MuiElement = screen.getByRole("img");
    expect(MuiElement).toBeInTheDocument();

    const text = screen.getByText("Home");
    expect(text).toBeInTheDocument();
  });

  it("renders the text with icon", () => {
    render(
      <NavigationItem
        variant={"normal"}
        icon={"../../../../public/icons/home-1.svg"}
        text={"Home"}
        textVariant="body1"
        color={theme.palette.accent.blue}
        iconSelected={""}
        selected={false}
      />
    );

    const MuiElement = screen.getByRole("img");
    expect(MuiElement).toBeInTheDocument();

    const text = screen.getByText("Home");
    expect(text).toBeInTheDocument();
  });
});
