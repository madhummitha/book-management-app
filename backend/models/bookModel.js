const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookname: String,
  author: String,
  price: String,
  quantity: Number
});

module.exports = mongoose.model('Book', bookSchema);
