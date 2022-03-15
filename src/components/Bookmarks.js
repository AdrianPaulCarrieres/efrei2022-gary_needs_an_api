import { useEffect, useState } from "react";
import {getElement, setElement} from '../services';
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
          .then(data => setQuotes(data))
          .catch(error => console.log(error));
      }, []);

    useEffect(() => {
        setElement('bookmarks', bookmarks);
    }, [bookmarks]);

    return (
        <div>
        <div className="List">
            <ul>
                {quotes.map(quote => (
                    <li>
                        <Item quote={quote} />
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}

export default Bookmarks;