<<<<<<< HEAD
import './App.css'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import UserRating from './components/UserRating'

function App() {
  return (
    <>
      <HeroSection />
      <UserRating />
      <Footer />
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import UserInputs from "./components/UserInputs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <UserInputs />
>>>>>>> 20f9b6f (Navbar und Inputs angelegt)
    </>
  );
}

export default App;
