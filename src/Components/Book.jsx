import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, bookName, tags, author, image, category, rating } = book;
    // console.log(bookName);
    return (
        <div>
            <div className=" rounded-xl">

                <article className="lg:p-10 flex flex-col ">
                    <Link to={`/book-details/:${bookId}`}>
                        <div className='bg-[#F3F3F3] py-10 px-5  rounded-xl'>
                            <img alt="" className="object-cover w-fit mx-auto h-40 rounded-lg justify-center items-center " src={image} />
                        </div>
                        <div className="flex flex-col flex-1 p-6">
                            <div className="flex justify-between">
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 bg-[#F3F3F3] rounded-2xl p-4">{tags[0]}</a>
                                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600 bg-[#F3F3F3] rounded-2xl p-4">{tags[1]}</a>
                            </div>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{bookName}</h3>
                            <p>By: {author}</p>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600 items-center">
                                <p>{category}</p>
                                <div className="flex flex-row justify-between gap-3 items-center">
                                    <p>{rating}</p>
                                    <img src="../../public/Frame.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>

                </article>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book;