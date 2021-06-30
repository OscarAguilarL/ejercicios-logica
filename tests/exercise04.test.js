const reverseText = require('../src/exercise04');

test('should return the reverse of the string hola', () => {
  expect(reverseText('hola')).toMatch('aloh');
});
