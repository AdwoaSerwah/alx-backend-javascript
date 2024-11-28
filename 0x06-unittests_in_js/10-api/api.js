const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Root route (no changes here)
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Add /cart/:id route
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;

  // Validate if the id is a number using regex
  if (/^\d+$/.test(id)) {
    res.status(200).send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Cannot GET /cart/' + id);
  }
});

// Add /available_payments route
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Add /login route
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing userName');
  }
});

// Store the server instance for testing purposes
const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

// Export the server instance for use in the test
module.exports = server;
