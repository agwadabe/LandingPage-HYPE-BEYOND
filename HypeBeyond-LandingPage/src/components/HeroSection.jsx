import heroImage from "../assets/Hype&Beyond-Hero-Image.png";


const HeroSection = () => {
  return (
    <header>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Hype&Beyond</h1>
          <p>Your ultimate destination for the latest trends and styles.</p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
