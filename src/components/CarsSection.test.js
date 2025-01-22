import { render, screen, fireEvent } from "@testing-library/react";
import CarsSection from "./CarsSection";

describe("CarsSection Component", () => {
  test("'See more' button is present for all cards", () => {
    render(<CarsSection />);
    const buttons = screen.getAllByText(/see more/i);
    expect(buttons).toHaveLength(3); // 1 mobile + 2 desktop
  });
});
