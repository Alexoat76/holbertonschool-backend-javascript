export default function getStudentsByLocation(students, city) { // Get students by city
  // Check arg is an array before using filter
  if (Object.getPrototypeOf(students) === Array.prototype) { // If array is an array, use filter
    return students.filter((items) => items.location === city); // Return array of students by city
  }
  return []; // If array is not an array, return empty array
}
