import { render, screen } from "@testing-library/react";
import SellYourCar from "./SellYourCar";

describe("SellYourCar Component", () => {
  test("renders the VIN section label", () => {
    render(<SellYourCar />);
    const vinLabel = screen.getByText(/vin/i);
    expect(vinLabel).toBeInTheDocument();
  });
});
