const readline = require('readline');

// Create a readline interface to read from stdin (command line input)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display a welcome message and ask for the user's name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the name provided by the user
  console.log(`Your name is: ${name}`);

  // Close the readline interface
  rl.close();
});

// Display the closing message when the readline interface closes
rl.on('close', () => {
  console.log('This important software is now closing');
});
