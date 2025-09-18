import './Header.css';

function Header({ storeName, cartCount = 0 }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="store-name">{storeName}</h1>
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;