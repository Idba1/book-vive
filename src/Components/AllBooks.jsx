import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";

const AllBooks = () => {

    const [books, setBooks] = useState([]);
    console.log(books);

    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            {
                books.map((book) =>
                (<Book key={book.id}
                    book={book}
                ></Book>
                ))
            }
        </div>
    );
};

export default AllBooks;