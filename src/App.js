import './App.css';
import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { getElement, setElement } from './services/storageService';
import { Link } from "react-router-dom";
const Item = React.lazy(() => import('./components/Item'));

function App() {

  const [quotes, setQuotes] = useState([]);
  const [randomIndex, setRandomIndex] = useState(-1);
  const [bookmarks, setBookmarks] = useState([]);

  const setRandomQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomIndex(randomIndex);
  }, [quotes.length])


  function toggleBookmark() {
    const currentQuoteID = quotes[randomIndex].id;
    if (bookmarks.includes(currentQuoteID)) {
      const newBookmarks = bookmarks.filter(i => i !== currentQuoteID);
      setElement('bookmarks', newBookmarks);
      setBookmarks(newBookmarks);
    } else {
      const b = bookmarks;
      const newBookmarks = [...b, currentQuoteID];
      setBookmarks(newBookmarks);
      setElement('bookmarks', newBookmarks);
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
    <div>
      <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold mx-auto text-black dark:text-white">
          Gary a besoin d'une API
        </h1>
        <div className='mx-auto'>
          <Suspense fallback={<div>Chargement...</div>}>
            {(quotes.length > 0 && <Item quote={quotes[randomIndex]} />) || <div>Chargement...</div>}
          </Suspense>
        </div>
        <div className="mx-auto flex">
          <button
            className='mx-5 rounded-lg p-2 border-solid border-2 text-sky-500 border-sky-500 dark:border-white dark:text-white my-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-500 duration-300'
            onClick={() => toggleBookmark()}>
            {(bookmarks && bookmarks.length && bookmarks.includes(randomIndex + 1)) ? '★' : '☆' || '☆'}
          </button>
          <button className='mx-5 rounded-lg p-2 border-2 border-sky-500 dark:border-0 dark:text-white my-5 transition ease-in-out delay-150 text-sky-500 dark:bg-blue-500 hover:-translate-y-1 hover:scale-110 dark:hover:bg-indigo-500 hover:text-sky-400 hover:border-sky-400 dark:hover:text-white duration-300'
            onClick={() => setRandomQuote()}>
            Get new quote!
          </button>
            <Link to="/bookmarks" className="mx-5 rounded-lg p-2 border-2 border-sky-500 dark:border-0 text-sky-500 dark:text-white my-5 transition ease-in-out delay-150 dark:bg-blue-500 hover:-translate-y-1 hover:scale-110 dark:hover:bg-indigo-500 hover:text-sky-400 duration-300 hover:border-sky-400 dark:hover:text-white">My bookmarks</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
