import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



test('Initialize/Update Times', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const reserveButton = screen.getByRole("button", { name: /reserve/i });
  fireEvent.click(reserveButton);

  // Find the time select dropdown
  const timeSelect = await screen.findByLabelText(/choose time/i);

  // Select a time (assuming "17:00" is one of the options)
  await userEvent.selectOptions(timeSelect, "17:00");

  // Verify that the option is now selected
  const selectedOption = screen.getByRole('option', { name: "17:00" });
  expect(selectedOption.selected).toBe(true);
});
