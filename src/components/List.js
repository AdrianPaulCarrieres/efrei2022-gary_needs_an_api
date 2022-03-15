function List(props) {
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

export default List;