import './App.css';
import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { getElement, setElement } from './services';
const Item = React.lazy(() => import('./components/Item'));

function App() {

  const [quotes, setQuotes] = useState([]);
  const [randomIndex, setRandomIndex] = useState(-1);
  const [bookmarks, setBookmarks] = useState([]);

  const setRandomQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomIndex(randomIndex);
  }, [quotes.length])

  function toggleBookmarks() {
    if (bookmarks !== null && bookmarks.includes(randomIndex)) {
      const newBookmarks = bookmarks.filter(i => i !== randomIndex);
      setElement('bookmarks', newBookmarks);
      setBookmarks(newBookmarks);
    } else {
      const newBookmarks = bookmarks;
      setBookmarks([...newBookmarks, randomIndex]);
      setElement('bookmarks', bookmarks);
    }
  }

  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/quote/')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    setBookmarks(getElement('bookmarks'))
  }, [quotes])

  useEffect(() => {
    setRandomQuote();
  }, [quotes, setRandomQuote]);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-bold mx-auto text-white">
        Gary a besoin d'une API
      </h1>
      <button className='mx-auto rounded-full p-2 text-white my-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
        onClick={() => setRandomQuote()}>
        Get new quote!
      </button>
      <div className='mx-auto'>
        <Suspense fallback={<div>Chargement...</div>}>
          {(quotes.length > 0 && <Item quote={quotes[randomIndex]} />) || <div>Chargement...</div>}
        </Suspense>
      </div>
      <button
        className='mx-auto rounded-lg p-2 border-solid border-2 text-white my-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-500 duration-300'
        onClick={() => toggleBookmarks()}>
        {(bookmarks && bookmarks.length && bookmarks.includes(randomIndex)) ? '★' : '☆' || '☆'}
      </button>
    </div>
  );
}

export default App;
