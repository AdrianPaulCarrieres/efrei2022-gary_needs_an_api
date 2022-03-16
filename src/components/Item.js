function Item(props) {
    return (
        <div className="m-5">
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <div className="h-24 w-24 rounded-full mx-auto md:mx-0 md:h-48 md:w-48 md:rounded-none flex-none bg-cover bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${props.quote.image})` }} />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium text-white">
                            “{props.quote.quote}”
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