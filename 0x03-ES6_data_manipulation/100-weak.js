export const weakMap = new WeakMap(); // Create a new WeakMap instance
export function queryAPI(endpoint) { // Query the API
  if (!weakMap.has(endpoint)) { // If the endpoint is not in the WeakMap
    weakMap.set(endpoint, 0); // Add it to the WeakMap
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1); // Increment the endpoint's count
  if (weakMap.get(endpoint) >= 5) { // If the endpoint has been queried 5 times
    throw new Error('Endpoint load is high');
  }
}
