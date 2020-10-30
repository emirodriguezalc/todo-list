import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const form = screen.getByPlaceholderText(/Insert Title/i);
  expect(form).toBeInTheDocument();
});
