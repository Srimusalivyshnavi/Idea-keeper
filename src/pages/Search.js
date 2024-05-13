import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projectFirestore } from '../firebase/Config'; // Import Firebase config
import  IdeaList  from '../Components/IdeaList';

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const snapshot = await projectFirestore.collection("ideas")
          .where("tags", "array-contains", query)
          .get();

        const categorySnapshot = await projectFirestore.collection("ideas")
          .where("category", "==", query)
          .get();

        const titleSnapshot = await projectFirestore.collection("ideas")
          .where("title", "==", query)
          .get();

        const fetchedIdeas = [];
        snapshot.forEach(doc => fetchedIdeas.push({ id: doc.id, ...doc.data() }));
        categorySnapshot.forEach(doc => fetchedIdeas.push({ id: doc.id, ...doc.data() }));
        titleSnapshot.forEach(doc => fetchedIdeas.push({ id: doc.id, ...doc.data() }));

        setIdeas(fetchedIdeas);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Ideas Including "{query}"</h2>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      <IdeaList ideas={ideas} />
    </div>
  );
};

export default Search;