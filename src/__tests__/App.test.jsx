import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock;

describe('App', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  test('renders without crashing', () => {
    localStorageMock.getItem.mockReturnValue('[]');
    render(<App />);
  });

  test('loads cart from localStorage on mount', () => {
    localStorageMock.getItem.mockReturnValue('[]');
    render(<App />);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
  });

  test('saves cart to localStorage when cart changes', () => {
    localStorageMock.getItem.mockReturnValue('[]');
    render(<App />);
    // Verify setItem was called - this tests the useEffect that saves cart changes
    expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
  });
});