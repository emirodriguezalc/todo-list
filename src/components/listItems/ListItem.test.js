import { render, screen } from '@testing-library/react';
import ListItem from './ListItems';

test('renders learn react ListItem', async () => {
  const setEntryArr = () => { };
  const entryArr = [
    {
      title: 'a',
      body: 'a',
      id: 1,
      done: false,
      listPosition: 1
    },
    {
      title: 'b',
      body: 'b',
      id: 2,
      done: false,
      listPosition: 2
    }];
  render(<ListItem entryArr={entryArr} setEntryArr={setEntryArr} />)
  const listArray = screen.getAllByTestId('list-item')
  expect(listArray).toHaveLength(2)
});
