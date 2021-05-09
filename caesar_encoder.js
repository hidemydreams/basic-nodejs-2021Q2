const caesarCipher = (text, shift, mode) => {
  const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  shift = parseInt(shift);
  if (mode === 'decode') {
    shift *= -1;
  }
  return (
    text
      .split('')
      .map((symbol) => {
        const lowerCaseOfSymbol = symbol.toLowerCase();
        const index = alphabetArr.indexOf(lowerCaseOfSymbol);
        if (index >= 0) {
          const isLowerCase = symbol === lowerCaseOfSymbol;
          let shiftedIndex = (index + shift) % alphabetArr.length;
          if (shiftedIndex < 0) {
            shiftedIndex += alphabetArr.length;
          }
          let image = alphabetArr[shiftedIndex];
          if (!isLowerCase) {
            image = image.toUpperCase();
          }
          return image;
        } else {
          return symbol;
        }
      })
      .join('') + '\n'
  );
};
module.exports = {
  caesarCipher,
};
