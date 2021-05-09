const { Transform } = require('stream');
const { caesarCipher } = require('./caesar_encoder');
const encodeStream = (shiftNum, action) => {
  return new Transform({
    transform(chunk, encoding, cb) {
      const transformedChunk = caesarCipher(chunk.toString(), shiftNum, action);
      cb(null, transformedChunk);
    },
  });
};

module.exports = {
  encodeStream,
};
