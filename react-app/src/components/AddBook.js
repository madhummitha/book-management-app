import React, {useContext} from "react";
import BookForm from "./BookForm";
import {useNavigate} from "react-router-dom";
import BooksContext from "../context/BooksContext";
import Axios from "axios";

// const AddBook = ({books, setBooks}) => {
const AddBook = () => {
    const {books, setBooks} = useContext(BooksContext);
    const navigate = useNavigate();
    const handleOnSubmit = (book) => {
        Axios.post('/api/book/add', book)
            .then((response) => {
                setBooks([response.data, ...books]);
                navigate("/");
            })
            .catch((error) => {
                console.error('Error adding book:', error);
              });
    }

    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddBook;