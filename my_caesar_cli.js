const cli = require('commander');
const fs = require('fs');
const path = require('path');
const { ceaserCipher } = require('./caesar_encoder');
cli.version('0.0.1');
// Commands

// cli
//   .command('shift <encode>')
//   .alias('s')
//   .description('Choose encode or decode')
//   .action((shift) => {
//     console.log(shift);
//   });

// cli
//   .command('action')
//   .alias('a')
//   .description('Choose encode or decode')
//   .action((action) => {
//     console.log(action);
//   });

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
  const myReadStream = fs.createReadStream(
    path.resolve(__dirname, filename),
    'utf8'
  );

  myReadStream.on('data', (chunk) => {
    ceaserCipher(chunk, shift);
  });
}
