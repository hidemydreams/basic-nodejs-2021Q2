function caesarCipher(str, shift) {
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char);
    if (idx === -1) {
      result += char;
      continue;
    }

    let encodedIdx = (idx + shift) % 26;
    if (encodedIdx < 0) {
      const numberFromEnd = alphabetArr.length - Math.abs(encodedIdx);
      result += alphabetArr[numberFromEnd];
    } else {
      result += alphabetArr[encodedIdx];
    }
  }
  return result;
}
module.exports = {
  caesarCipher,
};
