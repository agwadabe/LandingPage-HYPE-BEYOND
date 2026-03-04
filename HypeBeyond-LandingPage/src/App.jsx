<<<<<<< HEAD
import './App.css'
<<<<<<< HEAD
=======
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import UserRating from './components/UserRating'
=======
>>>>>>> 20f9b6f (Navbar und Inputs angelegt)
>>>>>>> b1fbfda (Navbar und Inputs angelegt)
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
