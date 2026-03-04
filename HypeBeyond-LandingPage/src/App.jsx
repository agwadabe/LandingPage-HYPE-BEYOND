import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import UserInputs from "./components/UserInputs";
import UserRating from "./components/UserRating";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UserRating />
      <UserInputs />
      <Footer />
    </>
  );
}

export default App;
