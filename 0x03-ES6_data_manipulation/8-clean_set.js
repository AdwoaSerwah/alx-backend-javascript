// 8-clean_set.js
export default function cleanSet(set, startString = '') {
  const result = [];

  // Return an empty string if startString is not a string
  if (typeof startString !== 'string') {
    return '';
  }

  // If startString is empty, return an empty string
  if (startString === '') {
    return '';
  }

  set.forEach((value) => {
    // Skip undefined or non-string values
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Remove startString and push the rest
    }
  });

  return result.join('-'); // Join all values with a hyphen
}
