const caesarShift = (text, shift) => {
  return String.fromCharCode(
    ...text
      .split('')
      .map((char) => ((char.charCodeAt() - 97 + shift) % 26) + 97)
  );
};

module.exports = {
  caesarShift,
};
