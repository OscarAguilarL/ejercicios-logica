/**
 * Cuanto es el X por ciento de X numero
 *
 * Ejemplo:
 * percent(20, 100) returns: 20
 */

const percent = (percentage, number) => {
  return (percentage * number) / 100;
};

module.exports = percent;
