// testUtils.js
import { readDatabase } from './utils.js';

const testDatabasePath = './database1.csv'; // Path to your CSV file

// Call readDatabase with a test file
readDatabase(testDatabasePath)
  .then((students) => {
    console.log('Database loaded successfully:');
    console.log(students);
  })
  .catch((error) => {
    console.error('Error loading the database:');
    console.error(error.message);
  });
