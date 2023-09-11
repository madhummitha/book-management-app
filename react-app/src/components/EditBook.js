import React, {useContext, useState, useEffect} from "react";
import BookForm from "./BookForm";
import {useParams, useNavigate} from "react-router-dom";
import BooksContext from "../context/BooksContext";
import Axios from "axios";
import { response } from "express";

// const EditBook = ({ books, setBooks}) => {
const EditBook = () => {
    const {books, setBooks} = useContext(BooksContext);
    const navigate = useNavigate();
    const {id} = useParams();
    const [bookToEdit, setBookToEdit] = useState(null);

    useEffect(() => {
        Axios.get(`/api/book/${id}`)
          .then((response) => {
            setBookToEdit(response.data);
          })
          .catch((error) => {
            console.error("Error fetching book:", error);
          });
      }, [id]);

      const handleOnSubmit = (book) => {
        Axios.put(`/api/book/edit/${id}`, book) 
          .then((response) => {
            const updatedBooks = books.map((b) => (b.id === id ? response.data : b));
            setBooks(updatedBooks);
            navigate("/");
          })
          .catch((error) => {
            console.error("Error updating book:", error);
          });
      };
    

    return (
        <div>
            <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    )
}

export default EditBook;