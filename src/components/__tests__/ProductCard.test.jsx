import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';

const mockProduct = {
  name: 'Test Product',
  price: 29.99,
  image: 'test.jpg',
  description: 'Test description'
};

const mockAddToCart = vi.fn();

describe('ProductCard', () => {
  beforeEach(() => {
    mockAddToCart.mockClear();
  });

  test('renders without crashing', () => {
    render(
      <ProductCard 
        name={mockProduct.name}
        price={mockProduct.price}
        image={mockProduct.image}
        description={mockProduct.description}
        onAddToCart={mockAddToCart}
      />
    );
  });

  test('displays product name', () => {
    render(
      <ProductCard 
        name={mockProduct.name}
        price={mockProduct.price}
        image={mockProduct.image}
        description={mockProduct.description}
        onAddToCart={mockAddToCart}
      />
    );
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  test('displays product price', () => {
    render(
      <ProductCard 
        name={mockProduct.name}
        price={mockProduct.price}
        image={mockProduct.image}
        description={mockProduct.description}
        onAddToCart={mockAddToCart}
      />
    );
    
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });

  test('displays Add to Cart button', () => {
    render(
      <ProductCard 
        name={mockProduct.name}
        price={mockProduct.price}
        image={mockProduct.image}
        description={mockProduct.description}
        onAddToCart={mockAddToCart}
      />
    );
    
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  test('calls onAddToCart when Add to Cart button is clicked', () => {
    render(
      <ProductCard 
        name={mockProduct.name}
        price={mockProduct.price}
        image={mockProduct.image}
        description={mockProduct.description}
        onAddToCart={mockAddToCart}
      />
    );
    
    const addButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addButton);
    
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});