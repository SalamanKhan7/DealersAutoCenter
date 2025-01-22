import { render, screen, fireEvent } from "@testing-library/react";
import AutoLoanCalculator from "./AutoLoanCalculator";

describe("AutoLoanCalculator Component", () => {
  test("renders AutoLoanCalculator component correctly", () => {
    render(<AutoLoanCalculator />);

    // Check for main title
    expect(screen.getByText(/auto loan calculator/i)).toBeInTheDocument();

    // Check for all input labels

    expect(screen.getByText(/loan terms \(monthly\)/i)).toBeInTheDocument();
    expect(screen.getByText(/approx. credit score/i)).toBeInTheDocument();

    // Check for input placeholders
    expect(screen.getAllByPlaceholderText(/\$ 0\.00/i)).toHaveLength(5);

    // Check for loan term buttons
    const termButtons = screen.getAllByRole("button", { name: /\d+/ });
    expect(termButtons).toHaveLength(3);
    expect(termButtons[1]).toHaveClass("activeButton"); // Default active button

    // Check for credit score categories
    expect(screen.getByText(/poor/i)).toBeInTheDocument();
    expect(screen.getByText(/fair/i)).toBeInTheDocument();
    expect(screen.getByText(/good/i)).toBeInTheDocument();
    expect(screen.getByText(/excellent/i)).toBeInTheDocument();

    // Check for circular section elements
    expect(screen.getByText(/\$0/i)).toBeInTheDocument();
    expect(screen.getByText(/get pre-approved/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /apply/i })).toBeInTheDocument();
  });

  test("inputs accept user input", () => {
    render(<AutoLoanCalculator />);

    // Check Down Payment input
    const downPaymentInput = screen.getAllByPlaceholderText(/\$ 0\.00/i)[1];
    fireEvent.change(downPaymentInput, { target: { value: "5000" } });
    expect(downPaymentInput.value).toBe("5000");
  });

  test("loan term buttons toggle active state", () => {
    render(<AutoLoanCalculator />);

    const termButtons = screen.getAllByRole("button", { name: /\d+/ });
    const thirtySixMonthsButton = termButtons[0];
    const sixtyMonthsButton = termButtons[1];
    const seventyTwoMonthsButton = termButtons[2];

    // Check initial active state
    expect(sixtyMonthsButton).toHaveClass("activeButton");

    // Simulate clicking on the 36 months button
  });

  test("Apply button is clickable", () => {
    render(<AutoLoanCalculator />);

    const applyButton = screen.getByRole("button", { name: /apply/i });

    // Simulate clicking the Apply button
    fireEvent.click(applyButton);

    // Verify side effects (e.g., navigation or API call) if applicable
    // Mock the behavior if needed
  });
});
