import { Link } from 'react-router-dom';
import './Header.css';

function Header({ storeName, cartCount = 0 }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="store-name">{storeName}</h1>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Link to="/cart"><div className="cart-container">
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div></Link>
      </div>
    </header>
  );
}

export default Header;