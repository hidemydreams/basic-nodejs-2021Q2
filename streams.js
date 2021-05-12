const { Transform } = require('stream');
const { caesarCipher } = require('./caesar_encoder.js');
class TransformationStream extends Transform {
  constructor(action, shift) {
    super(action, shift);
    this.action = action;
    this.shift = shift;
  }
  _transform(chunk, encoding, cb) {
    chunk =
      caesarCipher(chunk.toString('utf8'), this.shift, this.action) + '\n';
    cb(null, chunk);
  }
}

module.exports = { TransformationStream };
