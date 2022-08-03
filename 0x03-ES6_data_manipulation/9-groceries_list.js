// Function to return a map of groceries and quantities
export default function groceriesList() {
  const groceries = new Map([ // Map of groceries and quantities
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
  return groceries; // Return the map
}
