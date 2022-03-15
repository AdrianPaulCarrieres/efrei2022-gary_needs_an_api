import './App.css';
import React, { useState, useEffect, Suspense } from 'react';
const List = React.lazy(() => import('./components/List'));

function App() {

  const [quotes, setQuotes] = useState([]);

  //fetch quotes from API
  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/quote/')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Gary a besoin d'une API
      </h1>
      <div>
        <Suspense fallback={<div>Chargement...</div>}>
          <List quotes={quotes} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
