import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';

test('home: renders breaking news', () => {
  render(<HomePage />, { wrapper: BrowserRouter });
  const breakingElement = screen.getByText(/son haberler/i);
  expect(breakingElement).toBeInTheDocument();
});

test('home: renders breaking slider items', () => {
  // we want 10 slides in the breaking news slider
  // but react-slick renders 2n+1 slides,
  // which means app should render 21 slides
  render(<HomePage />, { wrapper: BrowserRouter });
  const sliderItems = screen.getAllByTestId('slider-item');
  expect(sliderItems).toHaveLength(21);
});

test('home: renders news cards', () => {
  // tablet & desktop layouts should render 3 news cards above and 6 news cards below of the carousel
  render(<HomePage />, { wrapper: BrowserRouter });
  const newsCards = screen.getAllByTestId('newsCard');
  expect(newsCards).toHaveLength(9);
});

test('home: renders mobile news cards', () => {
  // mobile layout should render 20 news cards
  render(<HomePage />, { wrapper: BrowserRouter });
  const newsCards = screen.getAllByTestId('mobile-newsCard');
  expect(newsCards).toHaveLength(20);
});

test('home: renders news lists', () => {
  // mobile layout should render 3 news lists
  render(<HomePage />, { wrapper: BrowserRouter });
  const newsLists = screen.getAllByTestId('news-list');
  expect(newsLists).toHaveLength(3);
});

test('home: renders carousel items', () => {
  // we want 20 slides in the carousel
  // but react-slick renders 2n+1 slides,
  // which means app should render 41 slides
  render(<HomePage />, { wrapper: BrowserRouter });
  const carouselItems = screen.getAllByTestId('carousel-item');
  expect(carouselItems).toHaveLength(41);
});

test('home: renders carousel buttons', () => {
  // app should render 20 carousel buttons
  render(<HomePage />, { wrapper: BrowserRouter });
  const carouselButtons = screen.getAllByTestId('carousel-button');
  expect(carouselButtons).toHaveLength(20);
});
