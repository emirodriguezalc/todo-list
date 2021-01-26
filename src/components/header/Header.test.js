import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders learn react Header', async () => {
  render(<Header />)
  const headerTitle = screen.getByText('Sloth todo list');
  const sloth = screen.getByTestId('sloth-img')
  expect(headerTitle).toBeInTheDocument();
  expect(sloth).toBeInTheDocument();
});
