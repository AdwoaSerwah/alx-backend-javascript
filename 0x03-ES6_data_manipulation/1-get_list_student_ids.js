// 1-get_list_student_ids.js
export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.map((student) => student.id);
}
