import './App.css';
import React, { useState, useEffect, Suspense } from 'react';
const List = React.lazy(() => import('./components/List'));
const Item = React.lazy(() => import('./components/Item'));

function App() {

  const [quotes, setQuotes] = useState([]);
  const [randomIndex, setRandomIndex] = useState(-1);

  //fetch quotes from API
  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/quote/')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomIndex(randomIndex);
  }, [quotes]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Gary a besoin d'une API
      </h1>
      <div>
        <Suspense fallback={<div>Chargement...</div>}>
          {(quotes.length > 0 && <Item quote={quotes[randomIndex]} />) || <div>Chargement...</div>}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
