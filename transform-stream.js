const fs = require('fs');
const path = require('path');
const { caesarCipher } = require('./caesar_encoder');
const { encodeStream } = require('./streams');

let writeStreamToFile = (inputFilename, outputFilename, shift, action) => {
  const transformStream = encodeStream(parseInt(shift), action);
  const myReadStream = fs.createReadStream(
    path.resolve(__dirname, inputFilename),
    'utf8'
  );
  myReadStream.on('error', (err) => {
    process.stderr.write('No such input file...\n');
    process.exitCode = 1;
  });
  const myWriteStream = fs.createWriteStream(
    path.resolve(__dirname, outputFilename),
    { flags: 'a' },
    'utf-8'
  );
  myWriteStream.on('error', (err) => {
    process.stderr.write('No such output file...\n');
    process.exitCode = 1;
  });
  myReadStream.pipe(transformStream).pipe(myWriteStream);
};

let writeTextToFile = (text, outputFilename, shift, action) => {
  const myWriteStream = fs.createWriteStream(
    path.resolve(__dirname, outputFilename),
    { flags: 'a' },
    'utf-8'
  );

  myWriteStream.write(caesarCipher(text, shift, action));
};

let writeTextToConsole = (text, shift, action) => {
  process.stdout.write(
    `Here is your ${
      action === 'encode' ? 'encoded' : 'decoded'
    } string > ${caesarCipher(text, shift, action)} \n`
  );
};

module.exports = {
  writeStreamToFile,
  writeTextToFile,
  writeTextToConsole,
};
