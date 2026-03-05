import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import HeroEffect from './components/HeroEffect'
import UserInputs from "./components/UserInputs";
import UserRating from "./components/UserRating";

function App() {
  return (
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar />
      <HeroSection />
      <HeroEffect />
      <UserRating />
      <UserInputs />
      <Footer />
    </div>
  );
}

export default App;
