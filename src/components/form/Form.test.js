import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders learn react form', async () => {
  render(<Form />)
  const formTitleElement = screen.getByPlaceholderText(/Insert title of your new entry, a short one/i);
  const formBodyElement = screen.getByPlaceholderText(/Insert description of your new entry, but don't try too hard, remember that less is more/i);
  expect(formTitleElement).toBeInTheDocument();
  expect(formBodyElement).toBeInTheDocument();
});
