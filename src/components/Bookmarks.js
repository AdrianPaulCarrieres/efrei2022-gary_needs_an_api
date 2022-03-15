import { useEffect, useState } from "react";
import {getElement, setElement} from './services/Storage';

function Bookmarks() {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const l = getElement('bookmarks');
        setTodoList(l);
    }, []);

    useEffect(() => {
        setElement('bookmarks', bookmarks);
    }, [bookmarks]);

    return (
        <div className="List">
            <ul>
                {props.quotes.map(quote => (
                    <li>
                        <Item quote={quote} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
