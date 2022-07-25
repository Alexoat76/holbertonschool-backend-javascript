export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const value of array) {
    array2.push(appendString + value);
  }
  return array2;
} // return an array of the two arrays and the string
