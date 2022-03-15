function Item(props) {
    return (
        <div>
            <img className="Avatar"
                src={props.quote.image}
                alt={props.quote.by}
            />
            <div className="Character">
                {props.quote.by}
            </div>
            <div className="Quote">
                {props.quote.quote}
            </div>
        </div>
    )
}

export default Item;