import './App.css'
import ProductCard from './components/ProductCard'
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart)
  };

  const removeFromCart = (productId) => {
    
    setCart(cart.filter(item => item.id !== productId));
  };

  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  return (
    <>
      <Header 
        storeName="ComponentCorner" 
        cartCount={cart.length}
      />
      <Hero 
        title="Welcome to ComponentCorner"
        subtitle="Discover amazing products built with React components"
        backgroundImage="https://placehold.co/1200x400/667eea/ffffff"
        buttonText="Shop Now"
      />
      <main className="products-section">
        <h2>Featured Products</h2>
        <div className="products-container">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              name = {product.name}
              price = {product.price}
              image={product.image}
              description={product.description}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
        <section className="cart-section">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <CartItem 
                    key={`${item.id}-${index}`}  // Using index too since items can repeat
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
              <div className="cart-total">
                <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</h3>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer 
        storeName="ComponentCorner"
        email="hello@componentcorner.com"
        phone="(555) 123-4567"
        address="123 React Street, Component City, RC 12345"
      />
    </>
  )
}

export default App
