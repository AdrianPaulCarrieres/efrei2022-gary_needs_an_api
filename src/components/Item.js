function Item(props) {
    return (
        <div className="m-5">
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={props.quote.image} alt={props.quote.by} width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium text-white">
                            "{props.quote.quote}"
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {props.quote.by}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            Final Space
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Item;