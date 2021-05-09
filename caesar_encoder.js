const caesarCipher = (text, shift, mode) => {
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  shift = parseInt(shift);
  if (mode === 'decode') {
    shift = -shift;
  }

  const textToArray = text.split('');
  const result = textToArray.map((symbol) => {
    const lowerCaseOfSymbol = symbol.toLowerCase();
    const index = alphabetArr.indexOf(lowerCaseOfSymbol);
    if (index >= 0) {
      const isLowerCase = symbol === lowerCaseOfSymbol;
      let shifted = (index + shift) % alphabetArr.length;
      if (shifted < 0) {
        shifted += alphabetArr.length;
      }
      let shiftedTable = alphabetArr[shifted];
      if (!isLowerCase) {
        shiftedTable = shiftedTable.toUpperCase();
      }
      return shiftedTable;
    } else {
      return symbol;
    }
  });
  return result.join('') + '\n';
};
module.exports = {
  caesarCipher,
};
