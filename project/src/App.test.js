

import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./component/bookingForm";


describe("BookingForm Component", () => {
  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();

  const mockProps = {
    submitForm: mockSubmit,
    dispatch: mockDispatch,
    availableTimes: {
      availableTimes: ["17:00", "18:00", "19:00"],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly", () => {
    render(<BookingForm {...mockProps} />);
    expect(screen.getByText("Table Reservation")).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
  });

  test("submit button should be disabled initially", () => {
    render(<BookingForm {...mockProps} />);
    const button = screen.getByText(/make your reservation/i);
    expect(button).toBeDisabled();
  });

  test("form becomes valid when all fields are filled", () => {
    render(<BookingForm {...mockProps} />);

    
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: "2025-12-10" } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "2" } });

    const button = screen.getByText(/make your reservation/i);
    expect(button).not.toBeDisabled();
  });

  test("calls submitForm on form submission", () => {
    render(<BookingForm {...mockProps} />);

    
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: "2025-12-10" } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "2" } });

    const button = screen.getByText(/make your reservation/i);

    fireEvent.click(button);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});

