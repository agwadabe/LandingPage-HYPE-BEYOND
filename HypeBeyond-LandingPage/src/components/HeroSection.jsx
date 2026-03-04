const logoDark = new URL("./assets/Hype&Beyond Logo Light Mode.svg", import.meta.url);

const HeroSection = () => {
  return (
    <header>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to</h1>
          <img src={logoDark} alt="Hype & Beyond Logo"/>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
