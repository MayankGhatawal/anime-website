import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-bold">TOONZ</h1>
        <ul className="flex space-x-7">
          <li><a href="#lore" className="text-white">Lore Olympus</a></li>
          <li><a href="#supernatural" className="text-white">Supernatural</a></li>
          <li><a href="#about" className="text-white">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;