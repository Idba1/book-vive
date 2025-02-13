import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";

const AllBooks = () => {

    const [books, setBooks] = useState([]);
    // console.log(books);

    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className="space-y-2 text-center m-5 lg:m-16">
                <h2 className="text-3xl font-bold ">Books</h2>
                <p>Books ignite emotions, from joyous adventure to  <br />poignant sorrow, offering solace and inspiration.  Cherish them.</p>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {
                books.map((book) =>
                (<Book key={book.id}
                    book={book}
                ></Book>
                ))
            }
            </div>
        </div>
    );
};

export default AllBooks;