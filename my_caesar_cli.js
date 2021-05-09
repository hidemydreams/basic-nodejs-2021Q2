const cli = require('commander');
const chalk = require('chalk');
const {
  writeStreamToFile,
  // writeTextToFile,
  // writeTextToConsole,
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

if (isNaN(shift)) {
  process.stderr.write(
    chalk.white.bgRed.bold('Please provide a number for shift \n')
  );
  process.exit(1);
} else if (!inputFilename) {
  process.stdin.write(
    chalk.white.bgBlue.bold(
      'input file was not defined, use console instead \n'
    )
  );
} else if (!outputFilename) {
  process.stdin.write(
    chalk.white.bgBlue.bold(
      'output file was not defined, here is your result \n'
    )
  );
}
writeStreamToFile(inputFilename, outputFilename, shift, action);
