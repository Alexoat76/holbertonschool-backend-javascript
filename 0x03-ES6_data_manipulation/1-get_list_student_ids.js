// Get list of student ids from array of students
export default function getListStudentIds(array) {
  // Check arguments is an array before using map
  if (!Array.isArray(array)) return []; // If array is not an array, return empty array
  return array.map((item) => item.id); // Return array of student ids
}
