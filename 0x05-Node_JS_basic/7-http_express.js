const express = require('express');

const app = express();
const port = 1245;
const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    // Attempt to read the file asynchronously
    const data = await fs.readFile(filePath, 'utf-8');

    // Split the file into lines, and filter out any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    let totalStudents = 0;

    // If there is no data or the file is just headers, throw an error
    if (lines.length < 2) {
      return `Number of students: ${totalStudents}`;
    }

    // Process the CSV data
    const students = {};

    // Start reading the CSV from the second line (skipping the header)
    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');

      // Skip invalid lines (e.g., empty fields or invalid CSV format)
      // if (!firstname || !field) continue;

      // Add student to the field
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
      totalStudents += 1;
    }

    // Prepare the result to return as a string
    let result = `Number of students: ${totalStudents}\n`;

    // Append the number of students in each field
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const fieldStudents = students[field];
        result += `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}\n`;
      }
    }

    // Return the result string
    return result.trimEnd();
  } catch (err) {
    // If there is an error (like file not found or invalid format), throw the error
    throw new Error('Cannot load the database');
  }
}

const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    // res.send(`This is the list of our students\n${result}`);
    // Call countStudents with the database filename and get the result
    const result = await countStudents(databaseFile);
    res.send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(500).send(`This is the list of our students\n${err.message}`);
  }
});

app.listen(port);

module.exports = app;
