const heroImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVyb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";

const HeroSection = () => {
  return (
    <header>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to HypeBeyond</h1>
          <p>Your ultimate destination for the latest trends and styles.</p>
          <button className="cta-button">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
