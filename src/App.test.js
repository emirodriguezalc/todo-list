import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const form = screen.getByPlaceholderText(/Insert title of your new entry, a short one/i);
  expect(form).toBeInTheDocument();
});
