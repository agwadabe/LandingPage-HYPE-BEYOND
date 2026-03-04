import './App.css'
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection'
import HeroEffect from './components/HeroEffect'
import UserRating from './components/UserRating'
import UserInputs from "./components/UserInputs";
import Footer from './components/Footer'


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
