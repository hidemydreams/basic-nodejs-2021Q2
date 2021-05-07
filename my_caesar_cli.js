const cli = require('commander');
const { writeStreamToFile } = require('./transform-stream');
cli.version('0.0.1');

// Options
cli
  .requiredOption('-s, --shift <number>', 'Shift for decoding')
  .option('-i, --input <filename>', 'Input file')
  .option('-o, --output <filename>', 'Output file')
  .requiredOption('-a, --action <type>', 'encode or decode action');
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
  process.stderr.write(`Caught Exception. Err: ${err}`);
  process.exit(1);
}

console.log(options);
