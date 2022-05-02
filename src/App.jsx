import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/';
import Hero from './components/Hero/';
import Contact from './pages/contactUs/';
import Donate from './pages/Donate/';
import About from './pages/about/';
import Wave1 from './components/Wave/wave1';
import Wave2 from './components/Wave/wave2';
import Footer from './components/Footer/';
function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Wave1/>
      <Contact/>
      <Wave2/>
      <Donate/>
      <Wave1/>
      <About/>
      <Wave2/>
      <Footer/>
    </div>
      
    
  );
}

export default App;
