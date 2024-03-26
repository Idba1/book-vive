import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const [singleBooks, setSingleBooks] = useState({});
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);
    // console.log(books);

    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    // console.log(singleBooks);

    

    useEffect(() => {
        if (books) {
            const singleBooks = books.find((book) => book.bookId == bookId);
            setSingleBooks(singleBooks)
        }
    }, [books, bookId])
    const { bookName, tags, author, image, category, rating, review,
        totalPages, publisher, yearOfPublishing } = singleBooks;

    return (
        <div>
            <div className="card card-normal lg:card-side bg-base-100 shadow-xl p-2 lg:p-16 ">
                <figure className="lg:w-1/3 p-10 rounded-xl"><img src={image} alt="Movie" className="rounded-xl" /></figure>
                <div className="card-body lg:w-7/12">
                    <h2 className="card-title">{bookName}</h2>
                    <p>{author}</p>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <h6>{review}</h6>
                    <div className="lg:flex flex-col lg:gap-x-12">
                        <h1>Tag</h1>
                        <div className="flex justify-between gap-3">
                            <span>{tags[0]}</span>
                            <span>{tags[1]}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <p>Number of Pages: {totalPages}</p>
                        <p>Publisher: {publisher} </p>
                        <p>Year of Publishing: {yearOfPublishing} </p>
                        <p>Rating: {rating} </p>
                    </div>
                    <div className="flex gap-6">
                        <button className="btn btn-neutral">Read</button>
                        <button className="btn btn-neutral">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;