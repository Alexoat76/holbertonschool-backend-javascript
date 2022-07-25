export default function iterateThroughObject(reportWithIterator) {
  let employees = '';

  for (const [i, value] of reportWithIterator.entries()) {
    if (i !== reportWithIterator.length - 1) {
      employees += `${value} | `;
    } else {
      employees += value;
    }
  }

  return employees;
} // Return every employee in the report. Separate each employee with a pipe (|) character.
// If there are no employees in the report, return an empty string.
