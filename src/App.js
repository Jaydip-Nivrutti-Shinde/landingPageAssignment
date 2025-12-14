import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="App relative min-h-screen">
      <ParticlesBackground />
      <FloatingElements />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;