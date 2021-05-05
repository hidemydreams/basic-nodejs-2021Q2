const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const { caesarShift } = require('./caesar_encoder');

const toUpperCaseReverseStream = (shiftNum) => {
  return new Transform({
    transform(chunk, encoding, cb) {
      const transformedChunk = caesarShift(chunk.toString(), shiftNum);
      cb(null, transformedChunk);
    },
  });
};

const transformStream = toUpperCaseReverseStream(25);
let writeStreamToFile = (inputFilename, outputFilename) => {
  const myReadStream = fs.createReadStream(
    path.resolve(__dirname, inputFilename),
    'utf8'
  );
  const myWriteStream = fs.createWriteStream(
    path.resolve(__dirname, outputFilename),
    'utf8'
  );
  myReadStream.pipe(transformStream).pipe(myWriteStream);
};

module.exports = {
  writeStreamToFile,
};
