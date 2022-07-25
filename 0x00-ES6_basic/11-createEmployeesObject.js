export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: [...employees] };
} // return an object with the department name as the key and the employees array as the value
