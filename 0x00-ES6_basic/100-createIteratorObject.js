export default function createIteratorObject(report) {
  const employees = [];

  // Flatten the employees into a single array
  for (const department in report.allEmployees) {
    // Use Object.prototype.hasOwnProperty.call to check for own properties
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      employees.push(...report.allEmployees[department]);
    }
  }

  // Create an iterator for the flattened employee list
  return employees[Symbol.iterator]();
}
