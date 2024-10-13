import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-bold mb-2">Anime Mangatoon</h3>
        <p className="mb-4">Your one-stop destination for the latest in webtoons and manhwas!</p>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Instagram
          </a>
        </div>
        <p className="mt-4">© 2024 Anime Mangatoon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
