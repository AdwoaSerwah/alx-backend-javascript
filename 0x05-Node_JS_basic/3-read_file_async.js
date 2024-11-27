const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    // Attempt to read the file asynchronously
    const data = await fs.readFile(filePath, 'utf-8');

    // Split the file into lines, and filter out any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    let totalStudents = 0;

    // If there is no data or the file is just headers, throw error
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
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

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const fieldStudents = students[field];
        console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
      }
    }
  } catch (err) {
    // If there is an error (like file not found or invalid format), throw the error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
