import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders breaking news', () => {
  render(<HomePage />);
  const breakingElement = screen.getByText(/son haberler/i);
  expect(breakingElement).toBeInTheDocument();
});

test('renders breaking slider items', () => {
  // we want 10 slides in the breaking news slider
  // but react-slick renders 2n+1 slides,
  // which means app should render 21 slides
  render(<HomePage />);
  const sliderItems = screen.getAllByTestId('slider-item');
  expect(sliderItems).toHaveLength(21);
});

test('renders news cards', () => {
  // tablet & desktop layouts should render 3 news cards above and 6 news cards below of the carousel
  render(<HomePage />);
  const newsCards = screen.getAllByTestId('newsCard');
  expect(newsCards).toHaveLength(9);
});

test('renders mobile news cards', () => {
  // mobile layout should render 20 news cards
  render(<HomePage />);
  const newsCards = screen.getAllByTestId('mobile-newsCard');
  expect(newsCards).toHaveLength(20);
});

test('renders news lists', () => {
  // mobile layout should render 3 news lists
  render(<HomePage />);
  const newsLists = screen.getAllByTestId('news-list');
  expect(newsLists).toHaveLength(3);
});

test('renders carousel items', () => {
  // we want 20 slides in the carousel
  // but react-slick renders 2n+1 slides,
  // which means app should render 41 slides
  render(<HomePage />);
  const carouselItems = screen.getAllByTestId('carousel-item');
  expect(carouselItems).toHaveLength(41);
});

test('renders carousel buttons', () => {
  // app should render 20 carousel buttons
  render(<HomePage />);
  const carouselButtons = screen.getAllByTestId('carousel-button');
  expect(carouselButtons).toHaveLength(20);
});
