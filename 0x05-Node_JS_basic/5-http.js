const http = require('http');
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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    const filePath = process.argv[2];
    res.write('This is the list of our students\n');

    countStudents(filePath)
      .then((data) => {
        // res.write('This is the list of our students\n');
        res.end(data); // Complete response after successfully processing students
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
