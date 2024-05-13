import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from "../firebase/Config";

const Idea = () => {
  const { id } = useParams();

  const [idea, setIdea] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("ideas").doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIdea(doc.data());
        setIsPending(false);
        setError(null);
      } else {
        setError("Could not fetch idea");
        setIsPending(false);
        setIdea(null);
      }
    }, (error) => {
      setError(error.message);
      setIsPending(false);
    });

    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection("ideas").doc(id).update({
      title: "something completely different"
    });
  };


  return (
    <div className="container mx-auto px-4 py-8">
      {error && <p className="text-red-500">{error}</p>}
      {isPending && <p>Loading...</p>}
      {idea && (
        <>
          <h2 className="text-2xl mb-4"><span className="text-green-500">Title:</span> {idea.title}</h2>
          <p className="mb-4"><span className="text-orange-500">Description:</span> {idea.description.substring(0, 100)}</p>
          <div className="flex flex-wrap mt-1">
            {idea.tags && idea.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md mr-2 mb-2">{tag}</span>
            ))}
          </div>
          <h2 className="text-2xl mb-4"><span className="text-red-500">Category:</span> {idea.category} </h2>
          <h2 className="text-2xl mb-4"><span className="text-purple-500">Author:</span> {idea.author}</h2>
          <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Update Title</button>
        </>
      )}

    </div>
  );
};

export default Idea;