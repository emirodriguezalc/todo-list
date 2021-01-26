import { render } from '@testing-library/react';
import Entry from './Entry';

test('renders learn react form', async () => {
  const entry = {
    title: '',
    body: '',
  };
  const setEntryArr = () => { };
  const entryArr = [];
  render(<Entry entry={entry} setEntryArr={setEntryArr} entryArr={entryArr} />)
  const entryTitle = document.getElementById('entryTitle');
  const entryBody = document.getElementById('entryBody');
  expect(entryTitle).toBeInTheDocument();
  expect(entryBody).toBeInTheDocument();
});
