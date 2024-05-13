import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from '../pages/GoogleLogin'; // Adjust the path if necessary
import Searchbar from './Searchbar';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false); // State variable to track login status
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/home');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="bg-gradient-to-r from-orange-300 via-violet-300 to-yellow-300 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Idea Keeper</Link>
        <div className="flex items-center">
          {loggedIn ? (
            <>
              <Searchbar />
              <button onClick={() => navigate('/create')} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Idea
              </button>
              <button onClick={handleLogout} className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            </>
          ) : (
            <GoogleLogin loggedIn={loggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



