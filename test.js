const prompts = [
  'Type in any string characters > ',
  'Here is your encoded string > ',
];

const writeToConsole = (promptIndex) => {
  process.stdout.write(prompts[promptIndex]);
};

writeToConsole(0);

process.stdin.on('data', (data) => {
  process.stdout.write(`\n ${data.toString().trim()} \n`);
});
