const cli = require('commander');
const { writeStreamToFile } = require('./transform-stream');
cli.version('0.0.1');
// Options;
cli
  .option('-s, --shift <number>', 'Shift for decoding')
  .option('-i, --input <filename>', 'Input file')
  .option('-o, --output <filename>', 'Output file')
  .option('-a, --action <action>', 'encode or decode action');
cli.parse(process.argv);

const options = cli.opts();
const inputFilename = options.input;
const shift = options.shift;
const outputFilename = options.output;
const action = options.action;

if (options.input && options.shift && options.output && options.action) {
  writeStreamToFile(inputFilename, outputFilename, shift, action);
} else if (shift === undefined) {
  console.log('please provide shift number');
} else if (!Number.isInteger(parseInt(shift))) {
  console.log('shift must be a number');
} else if (inputFilename.startsWith('-')) {
  const prompts = [
    'Type in any string characters > ',
    'Here is your encoded string > ',
  ];
  const writeToConsole = (promptIndex) => {
    process.stdout.write(prompts[promptIndex]);
  };

  writeToConsole(0);

  process.stdin.on('data', (data) => {
    writeStreamToFile(data.toString(), outputFilename, shift, action);
  });
}
