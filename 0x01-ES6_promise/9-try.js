// 9-try.js
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result); // Add the result of the math function to the queue
  } catch (error) {
    queue.push(`Error: ${error.message}`); // Add the full error message with the 'Error:' prefix
  }
  queue.push('Guardrail was processed'); // Always add this message at the end
  return queue;
}
