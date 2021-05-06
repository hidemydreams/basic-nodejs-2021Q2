const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const { caesarCipher } = require('./caesar_encoder');

const toUpperCaseReverseStream = (shiftNum) => {
  return new Transform({
    transform(chunk, encoding, cb) {
      const transformedChunk = caesarCipher(chunk.toString(), shiftNum);
      cb(null, transformedChunk + '\n');
    },
  });
};

let writeStreamToFile = (inputFilename, outputFilename, shift) => {
  const transformStream = toUpperCaseReverseStream(parseInt(shift));
  const myReadStream = fs.createReadStream(
    path.resolve(__dirname, inputFilename),
    'utf8'
  );
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
