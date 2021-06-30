const match = require('../src/exercise03');

const phrase =
  'Hola mundo!, mi nombre es Oscar y mi especialidad el Desarrollo Web';
const word = 'mi';

test('should return the count of a word in a phrase', () => {
  expect(match(phrase, word)).toBe(2);
});
