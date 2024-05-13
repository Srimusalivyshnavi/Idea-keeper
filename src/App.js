import React from 'react';
import Navbar from './Components/Navbar'; 
import Home from './pages/Home';
import Create from './pages/Create';
import Search from './pages/Search';
import Idea from './pages/Idea';
import GoogleLogin from './pages/GoogleLogin'; // Import the SignInFormWithGoogle component
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Render the sign-in form component at the root route */}
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ideas/:id" element={<Idea />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
