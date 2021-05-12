const cli = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const runCliArgs = () => {
  cli.version('0.0.1');
  cli
    .requiredOption('-s, --shift <number>', 'Shift number')
    .requiredOption('-a, --action <type>', 'encode/decode action')
    .option('-i, --input <type>', 'File for reading')
    .option('-o, --output <filename>', 'File for output');
  cli.parse(process.argv);
  return cli.opts();
};
// Arguments Validation
const actionValidation = (action) => {
  if (action) {
    if (action === 'encode' || action === 'decode') {
      return;
    }
  }
  console.error(chalk.red('Type of action must be encode or decode'));
  process.exit(1);
};
const shiftValidation = (shift) => {
  if (shift) {
    if (Number.isInteger(+shift)) {
      return;
    }
  }
  console.error(chalk.red('Shift must be a number'));
  process.exit(1);
};
const actionValidationShift = (action, shift) => {
  actionValidation(action);
  shiftValidation(shift);
};
const fileValidation = (file) => {
  try {
    fs.accessSync(file, fs.constants.F_OK);
  } catch (err) {
    console.error(chalk.red(`'${file}':  No such file`));
    process.exitCode = 1;
  }
};
module.exports = {
  runCliArgs,
  actionValidationShift,
  fileValidation,
};
