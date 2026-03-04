import './App.css'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import UserRating from './components/UserRating'
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UserInputs from "./components/UserInputs";

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
