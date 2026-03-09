import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductExample from "./components/ProductExample";
import UserRating from "./components/UserRating";
import UserInputs from "./components/UserInputs";
import Footer from "./components/Footer";
import Styles from "./UserRating.module.css";


function App() {
  return (
    <>
      <Background />
      <Navbar />
      <HeroSection />
      <ProductExample />
      <UserRating />
      <UserInputs />
      <Footer />
      <Styles />
    </>
  );
}

export default App;
