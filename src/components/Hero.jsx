import './Hero.css'

function Hero({ title, subtitle, backgroundImage, buttonText }) {
  return (
    <section className="hero" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="hero-button">{buttonText}</button>
      </div>
    </section>
  );
}

export default Hero;