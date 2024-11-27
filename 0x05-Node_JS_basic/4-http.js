// Import the http module
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the content-type header for plain text
  res.setHeader('Content-Type', 'text/plain');

  // Write the response
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245);

// Export the app so it can be tested
module.exports = app;
