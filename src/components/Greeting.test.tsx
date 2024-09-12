import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders message', () => {
  render(<Greeting message="Hello, World!" />);
  expect(screen.getByText(/Hello, World!/)).toBeInTheDocument();
});
