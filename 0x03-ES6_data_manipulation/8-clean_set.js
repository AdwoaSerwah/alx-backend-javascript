export default function cleanSet(set, startString) {
  const result = [];

  // If startString is empty, return an empty string
  if (startString === '') {
    return '';
  }

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Remove startString and push the rest
    }
  });

  return result.join('-'); // Join all values with a hyphen
}
