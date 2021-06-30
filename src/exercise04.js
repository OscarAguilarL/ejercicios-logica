/**
 * Ejercicio 04
 * Dada una cadena de texto, darle la vuelta e invertir el orden
 * de sus caracteres, sin usar métodos propios del lenguaje,
 * solo estructuras de control
 */

const reverseText = (text) => {
  let reversed = '';

  for (let letter of text) {
    reversed = `${letter}${reversed}`;
  }
  return reversed;
};

module.exports = reverseText;
