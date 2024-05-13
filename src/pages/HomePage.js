import React from 'react';
import idea from '../assests/idea.jpg'; // Corrected the spelling of "assets"

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-orange-300  to-yellow-300 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img src={idea} alt="Idea" className="w-64 mx-auto mb-8 rounded-full shadow-lg" />
        <h1 className="text-4xl font-bold  text-white  mb-4 animate-bounce shadow-lg">Welcome to <span className="text-purple-800">Idea Keeper</span>!</h1>
        <p className="text-lg font-bold italic  text-purple-400  mb-4">Explore, create, and organize your ideas with ease.</p>
        <p className="text-lg font-bold italic text-purple-400  mb-4">Get started today and turn your ideas into reality!</p>
        <div className="mt-8">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-4">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


