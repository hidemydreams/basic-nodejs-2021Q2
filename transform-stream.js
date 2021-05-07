const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const { caesarCipher } = require('./caesar_encoder');

const toUpperCaseReverseStream = (shiftNum, action) => {
  return new Transform({
    transform(chunk, encoding, cb) {
      const transformedChunk = caesarCipher(chunk.toString(), shiftNum, action);
      cb(null, transformedChunk + '\n');
    },
  });
};

let writeStreamToFile = (inputFilename, outputFilename, shift, action) => {
  const transformStream = toUpperCaseReverseStream(parseInt(shift), action);
  const myReadStream = fs.createReadStream(
    path.resolve(__dirname, inputFilename),
    'utf8'
  );

  myReadStream.on('error', (err) => {
    process.stderr.write('No such file\n');
  });

  const myWriteStream = fs.createWriteStream(
    path.resolve(__dirname, outputFilename),
    { flags: 'a' },
    'utf-8'
  );
  myReadStream.pipe(transformStream).pipe(myWriteStream);
};

module.exports = {
  writeStreamToFile,
};
