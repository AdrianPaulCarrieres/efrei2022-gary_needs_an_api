import { useEffect, useState } from "react";
import { getElement, setElement } from '../services/storageService';
import { Link } from "react-router-dom";
import Item from "./Item";

function Bookmarks() {
    const [bookmarks, setBookmarks] = useState([]);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        setBookmarks(getElement('bookmarks'));
    }, []);

    useEffect(() => {
        fetch('https://finalspaceapi.com/api/v0/quote/')
            .then(response => response.json())
            .then(data => {
                const b = bookmarks
                const q = data.filter(quote => b.includes(quote.id))
                setQuotes(q)
            })
            .catch(error => console.log(error));
    }, [bookmarks]);

    return (
        <div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-3">
            <Link to="/" className="fixed top-0 left-2 rounded-lg p-2 bg-sky-500 text-white my-5 transition ease-in-out delay-150 dark:bg-blue-500 hover:-translate-x-1 dark:hover:bg-blue-400 hover:bg-sky-400 duration-300">Return</Link>
                {quotes.map(quote => (
                    <div key={quote.id} className="flex flex-col">
                        <Item quote={quote} />
                        <div className="mx-auto">
                            <button
                                className="rounded-lg border p-2 border-red-600 text-red-600 transition ease-in-out delay-150 hover:bg-red-600 hover:text-white duration-300"
                                onClick={() => {
                                    const newBookmarks = bookmarks.filter(i => i !== quote.id);
                                    setElement('bookmarks', newBookmarks);
                                    setBookmarks(newBookmarks);
                                }}>
                                Unfav
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end">
            <Link to="/" className="mx-5 rounded-lg p-2 border-2 border-sky-500 text-sky-500 dark:border-0 dark:text-white my-5 transition ease-in-out delay-150 dark:bg-blue-500 hover:-translate-x-5 dark:hover:bg-blue-400 duration-300 hover:border-sky-400 hover:text-sky-400 dark:hover:text-white">Home page</Link>
            </div>
        </div>
    )
}

export default Bookmarks;