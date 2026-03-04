import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import UserInputs from "./components/UserInputs";
import UserRating from "./components/UserRating";
import Footer from "./components/Footer";

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
