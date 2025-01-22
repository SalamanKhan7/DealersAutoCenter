import { render, screen } from "@testing-library/react";
import NextCar from "./NextCar";

describe("NextCar Component", () => {
  test("renders the text correctly", () => {
    render(<NextCar />);

    // Verify the main text is rendered
    const mainText = screen.getByText(/your next car is waiting for you here/i);
    expect(mainText).toBeInTheDocument();
  });

  test("renders the More button", () => {
    render(<NextCar />);

    // Verify the 'More' button is rendered
    const moreButton = screen.getByRole("button", { name: /more/i });
    expect(moreButton).toBeInTheDocument();
  });

  test("renders the car image", () => {
    render(<NextCar />);

    // Verify the image is rendered with correct alt text
    const carImage = screen.getByAltText(/laptopImage/i);
    expect(carImage).toBeInTheDocument();
    expect(carImage).toHaveAttribute("src", "/laptopImageMain.png");
  });
});
