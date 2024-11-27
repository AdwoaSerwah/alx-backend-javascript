import fs from 'fs';
import { promises as fsPromises } from 'fs';

// Function to read the database and process the CSV
export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fsPromises.readFile(filePath, 'utf-8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Skip the first line (header)
        const students = {};
        for (let i = 1; i < lines.length; i += 1) {
          const [firstname, , , field] = lines[i].split(',');

          // Skip invalid lines
          if (!firstname || !field) continue;

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }

        resolve(students); // Return the processed data
      })
      .catch((error) => {
        reject(new Error('Cannot load the database')); // Handle error if file reading fails
      });
  });
};
