export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the employee names with ' | ' and return the resulting string
  return employees.join(' | ');
}
