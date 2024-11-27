const fs = require('fs');

function countStudents(filePath) {
  // Check if the file exists before attempting to read it
  // 5
  // 6
  // 7
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }

  // Read the file synchronously
  const data = fs.readFileSync(filePath, 'utf-8');

  // Split the file into lines, and filter out any empty lines
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  let totalStudents = 0;

  // If there is no data or the file is just headers, throw error
  if (lines.length < 2) {
    // throw new Error('Cannot load the database');
    console.log(`Number of students: ${totalStudents}`);
    return;
  }

  // Process the CSV data
  const students = {};
  // let totalStudents = 0;

  // Start reading the CSV from the second line (skipping the header)
  for (let i = 1; i < lines.length; i += 1) {
    const [firstname, , , field] = lines[i].split(',');

    // Skip invalid lines (e.g., empty fields or invalid CSV format)
    // if (!firstname || !lastname || !age || !field) continue;

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
    if (Object.prototype.hasOwnProperty.call(students, field)) { // Safely check for own properties
      const fieldStudents = students[field];
      console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
    }
  }
}

module.exports = countStudents;
