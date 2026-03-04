import './App.css'

import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import UserRating from './components/UserRating'

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection'
import UserRating from './components/UserRating'
import UserInputs from "./components/UserInputs";
import Footer from './components/Footer'


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
