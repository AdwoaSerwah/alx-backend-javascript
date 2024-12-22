export default function cleanSet(set, startString) {
  const result = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Remove startString and push the rest
    }
  });

  return result.join('-'); // Join all values with a hyphen
}
