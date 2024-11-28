const express = require('express');
const app = express();

// Root route (no changes here)
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Add new /cart/:id route
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;

  // Validate if the id is a number using regex
  if (/^\d+$/.test(id)) {
    res.status(200).send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Cannot GET /cart/' + id);
  }
});

// Store the server instance for testing purposes
const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

// Export the server instance for use in the test
module.exports = server;
