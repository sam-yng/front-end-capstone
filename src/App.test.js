import { render, screen } from '@testing-library/react';
import Form from './components/Form';

test('renders the form heading', () => {
  render(<Form />);
  const headingElement = screen.getByText("Reservation Form")
  expect(headingElement).toBeInTheDocument();
});
