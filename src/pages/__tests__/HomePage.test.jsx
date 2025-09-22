import { render, screen } from '@testing-library/react';
import HomePage from '../Homepage';

describe('HomePage', () => {
  test('renders without crashing', () => {
    render(<HomePage />);
  });

  test('displays main heading', () => {
    render(<HomePage />);
    // Test for whatever main text/heading exists on homepage
    expect(screen.getByText(/Welcome to ComponentCorner/i)).toBeInTheDocument();
  });
});