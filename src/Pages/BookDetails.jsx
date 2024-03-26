import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AllBooks from "../Components/AllBooks";

const BookDetails = () => {
    const [singleBooks, setSingleBooks] = useState({});
    const { bookId } = useParams();
    const { books, setBooks } = AllBooks();
    console.log(setBooks);

    console.log(singleBooks);

    console.log(bookId, setSingleBooks);
    useEffect(() => {
        if (books) {
            const singleBooks = books.find((book) => book.bookId === +bookId);
            // setBooks (singleBooks);
            console.log(singleBooks);
            setSingleBooks(singleBooks)
        }
    }, [books, bookId])
    const { Name } = singleBooks
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-16 ">
                <figure className="w-1/3 p-10 rounded-xl"><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" className="rounded-xl" /></figure>
                <div className="card-body w-7/12">
                    <h2 className="card-title">Book Name</h2>
                    <p>Author Name</p>
                    <hr />
                    <p>Category</p>
                    <hr />
                    <h6>Review: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum vel facilis nulla inventore minima aliquid omnis iure ipsa dicta voluptates laudantium repellendus tenetur, commodi mollitia cupiditate non debitis sit esse voluptatum et eos. Nulla voluptas rerum eius unde quo omnis, assumenda, modi aspernatur accusamus pariatur inventore adipisci, neque officiis.</h6>
                    <div className="flex gap-12">
                        <h1>Tag</h1>
                        <span>TagOne</span>
                        <span>TagTwo</span>
                    </div>
                    <hr />
                    <div>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
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