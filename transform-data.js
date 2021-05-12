const fs = require('fs');
const { pipeline } = require('stream');
const { runCliArgs } = require('./my_caesar_cli.js');
const { TransformationStream } = require('./streams');
const { actionValidationShift, fileValidation } = require('./my_caesar_cli.js');

const options = runCliArgs();
let readFromConsole = process.stdin;
let writeToConsole = process.stdout;
// if options exist, we are reading from files
if (options.hasOwnProperty('input')) {
  fileValidation(options.input);
  readFromConsole = fs.createReadStream(options.input, 'utf8');
}

if (options.hasOwnProperty('output')) {
  writeToConsole = fs.createWriteStream(options.output, { flags: 'a' });
}

actionValidationShift(options.action, options.shift);
pipeline(
  readFromConsole,
  new TransformationStream(options.action, options.shift),
  writeToConsole,
  (error) => {
    if (error) {
      process.stderr('Please check everything for errors and try 1 more time');
    }
  }
);
