import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Link the route for the homepage
router.get('/', AppController.getHomepage);

// Link the route for /students and /students/:major
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
