import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BodyClass from "./BodyClass";

describe("BodyClass Component", () => {
  test("renders desktop header", () => {
    render(<BodyClass />);
    const headerElement = screen.getByText(/Shop By Body Class/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders mobile header", () => {
    render(<BodyClass />);
    const mobileHeader = screen.getByText(/BodyClass/i);
    expect(mobileHeader).toBeInTheDocument();
  });

  test("renders ViewAll button", () => {
    render(<BodyClass />);
    const viewAllButton = screen.getByText(/ViewAll/i);
    expect(viewAllButton).toBeInTheDocument();
  });

  test("renders initial cars in the mobile carousel", () => {
    render(<BodyClass />);
    const carImages = screen.getAllByAltText(/MPV|Incomplete vehicle|Coupe/i);
    expect(carImages.length).toBeGreaterThan(0);
  });
});
