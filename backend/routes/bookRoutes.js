const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

router.get('/', async(req, res) => {
    try {
        const allBooks = await Book.find();
        res.json(allBooks);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Error adding the book!'});
    }
})

router.post('/add', async(req, res) => {
    try {
       const {bookname, author, price, quantity} = req.body;
       const newBook = new Book({bookname, author, price, quantity});
       const savedBooks = await newBook.save();
       res.json(savedBooks); 
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Error adding the book!'});
    }
})

router.put('/edit/:id', async (req, res) =>{
    try {
        const {bookname, author, price, quantity} = req.body;
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, {bookname, author, price, quantity}, {new: true});
        res.json(updatedBook);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Error adding the book!'});
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found!' });
        }
        res.json(deletedBook);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting the book!' });
    }
});

module.exports = router;
