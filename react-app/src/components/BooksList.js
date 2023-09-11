import React, { useState, useEffect } from "react";
import _ from "lodash";
import Book from "./Book";
import BooksContext from "../context/BooksContext";
import Axios from 'axios';

const BooksList = () => {
  // const {books, setBooks} = useContext(BooksContext);
  const [fetchedBooks, setFetchedBooks] = useState([]);
useEffect(() => {
  Axios.get('/api/books/all')
    .then((response) => {
      setFetchedBooks(response.data);
    })
    .catch((error) => {
      console.error('Error fetching books', error);
    })
  }, []);

    const handleRemoveBook = (id) => {
      Axios.delete('/api/books/delete/${id}')
        .then(() => {
        setFetchedBooks(fetchedBooks.filter((book) => book.id !== id));
        })
        .catch((error) => {
          console.error('Error deleting books', error);
        })
    };

    return (
        <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(fetchedBooks) ? (
          fetchedBooks.map((book) => (
            <Book key={book._id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
    )
}

export default BooksList;