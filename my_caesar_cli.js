const cli = require('commander');
const {
  writeStreamToFile,
  writeTextToFile,
  writeTextToConsole,
} = require('./transform-stream');
cli.version('0.0.1');
const prompts = ['Type any string to encode it > '];

// Options
cli
  .requiredOption('-s, --shift <number>', 'Shift for decoding')
  .option('-i, --input <type>', 'Input file')
  .option('-o, --output <filename>', 'Output file')
  .requiredOption('-a, --action <type>', 'encode or decode action');

cli.parse(process.argv);
const options = cli.opts();
const inputFilename = options.input;
const shift = options.shift;
const outputFilename = options.output;
const action = options.action;
if (shift === undefined) {
  console.log('please provide shift number');
} else if (!Number.isInteger(parseInt(shift))) {
  process.stderr.write(`Please provide a number for Shift`);
  process.exit(1);
} else if (outputFilename === undefined && inputFilename === undefined) {
  const writeToConsole = (promptIndex) => {
    process.stdout.write(prompts[promptIndex]);
  };
  writeToConsole(0);
  process.stdin.on('data', (data) => {
    writeTextToConsole(`${data.toString().trim()}`, shift, action);
  });
} else if (inputFilename === undefined) {
  const writeToConsole = (promptIndex) => {
    process.stdout.write(prompts[promptIndex]);
  };
  writeToConsole(0);
  process.stdin.on('data', (data) => {
    writeTextToFile(`${data.toString().trim()}`, outputFilename, shift, action);
  });
}
