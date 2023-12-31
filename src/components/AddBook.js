import React, {useContext} from "react";
import BookForm from "./BookForm";
import {useNavigate} from "react-router-dom";
import BooksContext from "../context/BooksContext";

// const AddBook = ({books, setBooks}) => {
const AddBook = () => {
    const {books, setBooks} = useContext(BooksContext);
    const navigate = useNavigate();
    const handleOnSubmit = (book) => {
        setBooks([book, ...books]);
        navigate("/");
    }

    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddBook;