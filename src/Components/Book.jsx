
const Book = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Books</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                        <article className="lg:p-10 flex flex-col dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex justify-between">
                                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">something</a>
                                    <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                                </div>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <p>By: Author Name</p>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600 items-center">
                                    <p>Classic</p>
                                    <div className="flex flex-row justify-between gap-3 items-center">
                                        <p>rating</p>
                                        <img src="../../public/Frame.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Book;