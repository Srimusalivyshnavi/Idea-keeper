import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const GoogleLogin = ({ loggedIn, handleLogin, handleLogout }) => {
  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      console.log('Logged in user:', user);
      handleLogin(); // Call handleLogin function passed from parent
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  const handleGoogleLogout = async () => {
    try {
      await firebase.auth().signOut(); // Sign out the user
      handleLogout(); // Call handleLogout function passed from parent
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <button onClick={handleGoogleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      ) : (
        <button onClick={handleGoogleLogin} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default GoogleLogin;




