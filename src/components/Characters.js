import React from 'react';
import posiden from '../images/posiden.webp';
import Hades from '../images/hades.jpg';
import Apollo from '../images/apollo.webp';
import Hermes from '../images/Her.webp';

const characters = [
  { name: 'Posiden', image: posiden, details: 'Poseidon, the God of the sea, is Zeus’s brother from the underworld. He is usually characterized by a carefree and quick temperament, portrayed with green skin and long, wavy hair. Despite being slightly less witted, Poseidon is very loyal to his family. His relationship with his wife Amphitrite and their polygamous arrangement add an intriguing dynamic to his character.' },
  { name: 'Hades', image: Hades, details: 'n the Lore Olympus webtoon, Hades, the God of the underworld, takes center stage. Often depicted as a handsome blue man in a business suit, Hades runs the Underworld Corporation, serves as the older brother of Zeus and Poseidon, and plays a role in the Six Traitor Dynasty. His character takes on the burden of leadership and pursuing personal interests.' },
  { name: 'Apollo', image: Apollo, details: 'Apollo, the sun, God of music and prophecy, is a dark red, strong man known for arrogance. He becomes an essential antagonist after Persephone is raped, bringing severe issues of power abuse and trauma into play.' },
  { name: 'Hermes', image: Hermes, details: 'Hermes, the God of speed travel, is depicted as an athletic man in red. He works as a soul collector for Hades and is an old friend of Persephone. His character adds lightness and realism to the story.' },
];

const Characters = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Main Characters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <div key={character.name} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <h3 className=" text-white text-2xl font-bold pt-36 pl-32">{character.name}</h3>
                <p className="text-white p-2">{character.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;
