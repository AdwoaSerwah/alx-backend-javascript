// 9-try.js
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result); // Add the result of the math function to the queue
  } catch (error) {
    queue.push(error.message); // If an error is thrown, add the error message
  }
  queue.push('Guardrail was processed'); // Always add this message at the end
  return queue;
}
