import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Searchbar = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${term}`); 
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="rounded-l-md px-4 py-2 border border-r-0 border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Search</button>
      </form>
    </div>
  );
};
export default Searchbar;