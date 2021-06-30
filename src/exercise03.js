/**
 * Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
 * la frase y la palabra deben ser parametros de una función
 */

const match = (phrase, word) => {
  const regex = /[¡!"#$%&'()*+,-./:;<=>¿?@[\]^_`{|}~]/g;
  let count = 0;
  let phraseArr = phrase.toLowerCase().replace(regex, '').split(' ');
  phraseArr.forEach((elem) => {
    count += elem === word ? 1 : 0;
  });
  return count;
};

module.exports = match;
