import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Characters />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
