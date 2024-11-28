import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

// Retrieve the database filename from the command line arguments
const databaseFile = process.argv[2];

// Middleware to attach the database filename to the request object
app.use((req, res, next) => {
  req.databaseFile = databaseFile; // Attach databaseFile to the request object
  next();
});

// Use the router
app.use(router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Using database file: ${databaseFile}`);
});

export default app;
