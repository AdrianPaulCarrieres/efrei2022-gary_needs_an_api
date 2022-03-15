import './App.css';
import React, { useState, useEffect, Suspense } from 'react';
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
    setRandomQuote();
  }, [quotes]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold mx-auto text-white">
          Gary a besoin d'une API
        </h1>
        <div className='mx-auto rounded-full p-2 text-white my-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
          <button onClick={() => setRandomQuote()}>Get new quote!</button>
        </div>
        <div className='mx-auto'>
          <Suspense fallback={<div>Chargement...</div>}>
            {(quotes.length > 0 && <Item quote={quotes[randomIndex]} />) || <div>Chargement...</div>}
          </Suspense>
        </div>
    </div>
  );

  function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomIndex(randomIndex);
  }
}

export default App;
