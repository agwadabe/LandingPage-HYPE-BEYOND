import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UserRating from "./components/UserRating";
import UserInputs from "./components/UserInputs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Background/>
      <Navbar />
      <HeroSection />
      <UserRating />
      <UserInputs />
      <Footer />
      </>
  );
}

export default App;
