import './Footer.css';

function Footer({ storeName, email, phone, address }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>{storeName}</h4>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;