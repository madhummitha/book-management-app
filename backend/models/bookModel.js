const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  // Add other book properties as needed
});

module.exports = mongoose.model('Book', bookSchema);
