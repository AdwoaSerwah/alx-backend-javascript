import readDatabase from '../utils';

class StudentsController {
  // Method to get all students
  static async getAllStudents(req, res) {
    try {
      // Use the database file from the request object
      const { databaseFile } = req;

      // Read the database
      const database = await readDatabase(databaseFile);

      let response = 'This is the list of our students\n';

      // Sorting fields alphabetically (case insensitive)
      const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      // Looping through fields and adding the students count and names to response
      fields.forEach((field) => {
        const fieldStudents = database[field];
        response += `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}\n`;
      });

      res.status(200).send(response.trim()); // Send the response with no trailing newline
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  // Method to get students by major (CS or SWE)
  static async getAllStudentsByMajor(req, res) {
    try {
      const major = req.params.major.toUpperCase();

      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
      }

      // Use the database file from the request object
      const { databaseFile } = req;

      // Read the database
      const database = await readDatabase(databaseFile);
      const fieldStudents = database[major];

      if (!fieldStudents) {
        res.status(500).send('Cannot load the database');
      }

      const response = `List: ${fieldStudents.join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
