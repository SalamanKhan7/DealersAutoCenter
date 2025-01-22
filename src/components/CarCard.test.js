import { render, screen } from "@testing-library/react";
import CarCard from "./CarCard";

describe("CarCard Component", () => {
  const mockCar = {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  };

  test("renders car details correctly", () => {
    render(<CarCard car={mockCar} />);

    // Verify the car image is rendered
    const carImage = screen.getByAltText(mockCar.model);
    expect(carImage).toBeInTheDocument();
    expect(carImage).toHaveAttribute("src", mockCar.image);

    // Verify the car model is rendered
    expect(screen.getByText(mockCar.model)).toBeInTheDocument();

    // Verify the miles are rendered
    expect(screen.getByText(/125,452 mi/i)).toBeInTheDocument();

    // Verify the price and monthly price are rendered
    expect(screen.getByText(/\$ 7,000/i)).toBeInTheDocument();
    expect(screen.getByText(/est \$250 mo/i)).toBeInTheDocument();
  });

  test("renders the availability button", () => {
    render(<CarCard car={mockCar} />);

    // Verify the availability button is rendered
    const availabilityButton = screen.getByRole("button", {
      name: /check availability/i,
    });
    expect(availabilityButton).toBeInTheDocument();
  });
});
