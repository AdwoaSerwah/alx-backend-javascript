// Import the express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the root endpoint to display the message
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245);

// Export the app so it can be tested
module.exports = app;
