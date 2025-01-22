import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderMain from "./HeaderMain";

jest.mock("./SearchInventory", () => () => <div>Search Inventory</div>);

describe("HeaderMain Component", () => {
  test("renders the logo", () => {
    render(<HeaderMain />);
    const logoElement = screen.getByText(/Logo/i);
    expect(logoElement).toBeInTheDocument();
  });
  test("renders the SearchInventory component", () => {
    render(<HeaderMain />);
    const searchInventoryElement = screen.getByText(/Search Inventory/i);
    expect(searchInventoryElement).toBeInTheDocument();
  });
  test("renders the ExitToAppIcon", () => {
    render(<HeaderMain />);
    const logoutIcon = screen.getByTestId("ExitToAppIcon");
    expect(logoutIcon).toBeInTheDocument();
  });
});
