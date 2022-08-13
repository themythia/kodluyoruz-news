import { fireEvent, render, screen } from '@testing-library/react';
import Turkey from './Turkey';

test('cards should be rendered', () => {
  render(<Turkey />);
  const cards = screen.getByTestId('list-cards');
  expect(cards).toContainEqual();
});

test('cards should be have title', () => {
  render(<Turkey />);
  const cards = screen.getByRole('img');
  expect(cards).toBeInTheDocument();
});

test('cards should be have image', () => {
  render(<Turkey />);
  const cards = screen.getByTestId('card-title');
  expect(cards).toBeInTheDocument();
});

test('load more should be add 9 more cards', () => {
  render(<Turkey />);
  const handleClick = jest.fn();
  fireEvent.click(screen.getByTestId('load-more'));
  expect(handleClick).toHaveBeenCalledTimes(9);
});
