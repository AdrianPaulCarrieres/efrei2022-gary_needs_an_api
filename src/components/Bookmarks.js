import { useEffect, useState } from "react";
import { getElement, setElement } from '../services';
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
                const q = data.filter(quote => bookmarks.includes(quote.id))
                setQuotes(q)
            })
            .catch(error => console.log(error));
    }, [bookmarks]);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3">
                {quotes.map(quote => (
                    <div className="flex flex-col">
                        <Item quote={quote} />
                        <div className="mx-auto">
                            <button
                                className="rounded-lg border p-2 border-red-600 text-red-600"
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
        </div>
    )
}

export default Bookmarks;