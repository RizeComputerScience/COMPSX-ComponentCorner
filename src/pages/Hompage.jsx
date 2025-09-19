import Hero from '../components/Hero';
import './Hompage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Hero 
        title="Welcome to ComponentCorner"
        subtitle="Discover amazing products built with React components"
        backgroundImage="https://placehold.co/1200x400/667eea/ffffff"
        buttonText="Shop Now"
      />
      <section className="features">
        <h2>Why Shop With Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Quality Products</h3>
            <p>Carefully curated selection of the best items</p>
          </div>
          <div className="feature-card">
            <h3>Fast Shipping</h3>
            <p>Get your orders delivered quickly and safely</p>
          </div>
          <div className="feature-card">
            <h3>Great Support</h3>
            <p>Our team is here to help with any questions</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomePage;