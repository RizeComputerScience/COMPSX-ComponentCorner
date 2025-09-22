import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../CartItem';

const mockCartItem = {
  id: 1,
  name: 'Test Cart Item',
  price: 29.99,
  quantity: 2,
  image: 'test.jpg'
};

const mockRemove = vi.fn();

describe('CartItem', () => {
  beforeEach(() => {
    mockRemove.mockClear();
  });

  test('renders without crashing', () => {
    render(
      <CartItem 
        item={mockCartItem}
        onRemove={mockRemove}
      />
    );
  });

  test('displays item name', () => {
    render(
      <CartItem 
        item={mockCartItem}
        onRemove={mockRemove}
      />
    );
    
    expect(screen.getByText('Test Cart Item')).toBeInTheDocument();
  });

  test('displays item price', () => {
    render(
      <CartItem 
        item={mockCartItem}
        onRemove={mockRemove}
      />
    );
    
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });

  test('calls onRemove when remove button is clicked', () => {
    render(
      <CartItem 
        item={mockCartItem}
        onRemove={mockRemove}
      />
    );
    
    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);
    
    expect(mockRemove).toHaveBeenCalledWith(mockCartItem.id);
  });
});