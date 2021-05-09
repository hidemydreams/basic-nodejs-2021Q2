const fs = require('fs');
const path = require('path');
const { encodeStream } = require('./streams');
const chalk = require('chalk');

let writeStreamToFile = (inputFilename, outputFilename, shift, action) => {
  let inputTarget;
  let outputTarget;
  if (!inputFilename) {
    inputTarget = process.stdin;
  } else {
    inputTarget = fs
      .createReadStream(path.resolve(__dirname, inputFilename), 'utf8')
      .on('error', (err) => {
        process.stderr.write(chalk.white.bgRed.bold('No such input file...\n'));
        process.exit(1);
      });
  }
  if (!outputFilename) {
    outputTarget = process.stdin;
  } else {
    outputTarget = fs
      .createWriteStream(
        path.resolve(__dirname, outputFilename),
        { flags: 'a' },
        'utf-8'
      )
      .on('error', (err) => {
        process.stderr.write(
          chalk.white.bgRed.bold('No such output file...\n')
        );
        process.exit(1);
      });
  }
  const transformStream = encodeStream(parseInt(shift), action);
  inputTarget.pipe(transformStream).pipe(outputTarget);
};

module.exports = {
  writeStreamToFile,
};
