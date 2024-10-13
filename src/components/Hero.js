import React from 'react';

const Hero = () => {
  return (
    <section id="lore" className="bg-hero-image bg-fixed bg-cover bg-center h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl md:text-6xl text-white font-bold animate-fadeIn">Lore Olympus Webtoon</h1>
        <p className="text-white text-lg mt-4">Discover the jaw-dropping scenes from your favorite webtoon.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md transition hover:bg-blue-600">Read More</button>
      </div>
    </section>
  );
};

export default Hero;