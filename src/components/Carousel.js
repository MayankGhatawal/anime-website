import React, { useState } from 'react';
import levi from '../images/leviathan.jpg'
import season1 from '../images/season-1-1.jpg'
import gods from '../images/594f4d74-e0a2-4179-b8f5-141f140345d0-e1721128805577.jpg'
import existence from '../images/650x650_9a375a18096744f1075cfab98ecd25e8f0c2242407633b527cd89760-1-e1721128882154.jpg'
import breaker from '../images/Screenshot-2024-06-25-113722-e1721128847688.jpg'
import six from '../images/6.jpg'

const manhwas = [
  { title: 'Best Supernatural Manhwa – Leviathan', image: levi },
  { title: 'Tower of God', image: season1 },
  { title: 'Leveling Up with the Gods', image: gods },
  { title: 'Existence', image: existence },
  { title: 'The Breaker', image: breaker },
  { title: 'The First Hunter – Another Great Supernatural Manhwa', image: six },
];

const Carousel = () => {
    const [index, setIndex] = useState(0); // Current index of the carousel
  
    const handleNext = () => {
      setIndex((prevIndex) => (prevIndex + 1) % manhwas.length); // Loop to the first image
    };
  
    const handlePrev = () => {
      setIndex((prevIndex) => (prevIndex - 1 + manhwas.length) % manhwas.length); // Loop to the last image
    };
  
    return (
      <section className="py-10 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Top Supernatural Manhwa</h2>
          <div className="relative">
            <img 
              src={manhwas[index].image} 
              alt={manhwas[index].title} 
              className="mx-auto w-full h-96 object-cover rounded-lg shadow-lg" // Adjust size as needed
            />
            <div className="absolute inset-0 flex justify-between items-center">
              <button 
                onClick={handlePrev} 
                className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
              >
                &lt;
              </button>
              <button 
                onClick={handleNext} 
                className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Carousel;
