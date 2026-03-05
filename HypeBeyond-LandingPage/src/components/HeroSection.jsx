import logoDark from "../assets/Hype&Beyond Logo Dark Mode.svg";
import HeroEffect from "./HeroEffect";

const HeroSection = () => {
  return (
    <header>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to</h1>
          <img className="hero-logo" src={logoDark} alt="Hype & Beyond Logo" />
        </div>
      </section>
    </header>
  );
};

export default HeroSection;