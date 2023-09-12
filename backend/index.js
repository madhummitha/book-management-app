const express = require('express');
const app = express();
const path = require("path");

require("dotenv-safe").config({
  path: path.join(__dirname, "./.env"),
  allowEmptyValues: true,
});

const port = process.env.PORT || 3500;

// TODO: Connect to monoose

app.get("/status", (req, res) => res.json({
  os: process.platform,
  version: process.version,
  name: "book-management-api"
}));

// Define routes
app.use('/api/books', require('./routes/bookRoutes'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
