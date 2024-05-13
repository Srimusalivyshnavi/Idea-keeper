import React, { useEffect, useState } from 'react';
import { projectFirestore } from "../firebase/Config";
import IdeaList from "../Components/IdeaList"

const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

  const unsub=  projectFirestore.collection('ideas').onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("No ideas to load"); 
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach(doc => {
            results.push({ id: doc.id, ...doc.data() }); 
          });
          setData(results);
          setIsPending(false);
        }
      },(err) => {
        setError(err.message);
        setIsPending(false);
      
      })
      return () => unsub()

  }, [])

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <IdeaList ideas={data} />}
    </div>
  );
};

export default Home;