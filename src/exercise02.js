/**
 * Enunciado
 * Dada una cadena de texto, comprobar si es un palindromo
 * Los palindromos son palabras que se leen igual aún estando invertidas
 * Ejemplos: ana, bob, otto
 */

const isPalindrome = (word) => {
  wordReversed = word.split('').reverse().join('');
  return wordReversed === word;
};

module.exports = isPalindrome;
