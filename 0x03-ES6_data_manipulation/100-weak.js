export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the WeakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count for this endpoint
    weakMap.set(endpoint, 0);
  }

  // Increment the count of queries for the endpoint
  const currentCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, currentCount);

  // If the count is >= 5, throw an error
  if (currentCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
