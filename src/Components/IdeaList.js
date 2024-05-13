import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Trav from "../assests/Trav.svg"
import { projectFirestore } from '../firebase/Config';

const IdeasList = ({ ideas }) => {
 
  
  const handleClick = (id) => {
    projectFirestore.collection("ideas").doc(id).delete()
  }

  return (
    <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ideas.map(idea => (
        <div key={idea.id} className="rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold">{idea.title}</h3>
          <p className="text-sm mt-2">{idea.description.substring(0, 100)}...</p>
          <h3 className="text-lg font-semibold">{idea.category}</h3>
          <h3 className="text-sm text-gray-500">{idea.status}</h3>
          <h3 className="text-sm text-gray-500">{idea.author}</h3>
          <div className="flex items-center mt-2">
            <Link to={`/ideas/${idea.id}`} className="ml-2 text-blue-500">See</Link>
            <img 
              className='cursor-pointer hover:opacity-75'
              src={Trav}
              onClick={() => handleClick(idea.id)}
            />
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-semibold">Tags:</h3>
            <div className="flex flex-wrap mt-1">
              {idea.tags && idea.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md mr-2 mb-2">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdeasList;