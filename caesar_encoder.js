//decipher the string
let ceaserCipher = (str, key) => {
  //check if letter is uppercase
  function isUpperCase(str) {
    return str === str.toUpperCase();
  }
  let decipher = '';

  //decipher each letter
  for (let i = 0; i < str.length; i++) {
    //if letter is uppercase then add uppercase letters
    if (isUpperCase(str[i])) {
      decipher += String.fromCharCode(
        ((str.charCodeAt(i) + key - 65) % 26) + 65
      );
    } else {
      //else add lowercase letters
      decipher += String.fromCharCode(
        ((str.charCodeAt(i) + key - 97) % 26) + 97
      );
    }
  }
  console.log(decipher);
  return decipher;
};

module.exports = {
  ceaserCipher,
};
