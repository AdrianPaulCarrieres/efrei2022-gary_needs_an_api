import './App.css';
import { useState, useEffect } from 'react';

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
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
