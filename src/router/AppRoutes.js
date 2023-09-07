import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BooksList from '../components/BooksList';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<BooksList />} />
    <Route path="/add" element={<AddBook />} />
    <Route path="/edit/:id" element={<EditBook />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
