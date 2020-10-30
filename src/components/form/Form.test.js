import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import Form from './Form';
const mockOnSubmit = jest.fn()

test('renders learn react form', async () => {
  const { getByRole } = render(<Form setInputValue={mockOnSubmit} />)
  const formTitleElement = screen.getByPlaceholderText(/Insert Title/i);
  const formBodyElement = screen.getByPlaceholderText(/Insert body/i);
  expect(formTitleElement).toBeInTheDocument();
  expect(formBodyElement).toBeInTheDocument();


  await act(async () => {
    fireEvent.change(formTitleElement, { target: { value: "entry title" } })
    fireEvent.change(formBodyElement, { target: { value: "entry body" } })
  })

  await act(async () => {
    fireEvent.click(getByRole("button"))
  })

  expect(mockOnSubmit).toHaveBeenCalled()
});
