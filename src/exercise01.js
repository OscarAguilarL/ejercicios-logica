/*
Enunciado Ejercicio 01:
Dado un número, devolver su tabla de multiplicar completa
*/

const multTable = (num) => {
  let str = '';
  for (let i = 1; i <= 10; i++) {
    str += `${i} x ${num} = ${i * num}\n`;
  }
  return str;
};

console.log(multTable(5));
