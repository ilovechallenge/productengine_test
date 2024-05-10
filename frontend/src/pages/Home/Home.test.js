import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/home page/i);
  expect(linkElement).toBeInTheDocument();
});