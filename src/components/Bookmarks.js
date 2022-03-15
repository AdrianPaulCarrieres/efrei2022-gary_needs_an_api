import { useEffect, useState } from "react";
import { getElement } from '../services';
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
        <div className="min-h-screen flex flex-col justify-center">
            <div className="mx-auto">{quotes.map(quote => (
                <Item quote={quote} />
            ))}
            </div>
        </div>
    )
}

export default Bookmarks;