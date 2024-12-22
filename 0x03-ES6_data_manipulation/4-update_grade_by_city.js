// 4-update_grade_by_city.js
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Step 1: Filter students by city
    .map((student) => {
      // Step 2: Find the grade for each student
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student, // Keep all student attributes
        grade: gradeObj ? gradeObj.grade : 'N/A', // If found, update grade, otherwise "N/A"
      };
    });
}
