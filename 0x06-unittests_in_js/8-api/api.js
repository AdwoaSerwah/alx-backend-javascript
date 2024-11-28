const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Store the server instance
const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

// Export the server instance for use in the test
module.exports = server;
