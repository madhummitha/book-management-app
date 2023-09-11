// const express = require('express');
// const app = express();
// const path = require("path");

// require("dotenv-safe").config({
//   path: path.join(__dirname, "./.env"),
//   allowEmptyValues: true,
// });

// const port = process.env.PORT || 3500;

// const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://madhummithar:gJnAsSVg9qIxi91J@bookmanagement.gbfh8my.mongodb.net/';

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Check if the connection is successful
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });


// app.get("/status", (req, res) => res.json({
//   os: process.platform,
//   version: process.version,
//   name: "book-management-api"
// }));

// app.use('/api/books', require('./routes/bookRoutes'));

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv-safe');

// Load environment variables from .env file
dotenv.config({
  path: path.join(__dirname, './.env'),
  allowEmptyValues: true,
});

const app = express();
const port = process.env.PORT || 3500;
const mongoURI = process.env.DB_URL || 'mongodb+srv://madhummithar:gJnAsSVg9qIxi91J@bookmanagement.gbfh8my.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin (you can restrict this as needed)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/status', (req, res) =>
  res.json({
    os: process.platform,
    version: process.version,
    name: 'book-management-api',
  })
);

app.use('/api/books', require('./routes/bookRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
