export default function getStudentIdsSum(students) {
  // Check arg is an array before using reduce
  if (Object.getPrototypeOf(students) === Array.prototype) { // If array is an array, use reduce
    const ids = students.map((items) => items.id); // Get all ids from students
    const reducer = (accumlator, currentValue) => accumlator + currentValue; // Sum all ids
    return ids.reduce(reducer); // Return sum of all ids
  }
  return []; // Return empty array if arg is not an array
}
