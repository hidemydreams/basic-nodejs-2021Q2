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
if (options.input && options.shift && options.output && options.action) {
  const inputFilename = options.input;
  const shift = options.shift;
  const outputFilename = options.output;
  const action = options.action;
  console.log(inputFilename, outputFilename);
  writeStreamToFile(inputFilename, shift, outputFilename, action);
}
