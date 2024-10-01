export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees, // Use computed property names for the department
  };
}
