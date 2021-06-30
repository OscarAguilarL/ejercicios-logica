const percent = require('../src/exercise05');

test('should return the 43 percent of 897', () => {
  expect(percent(43, 897)).toBe(385.71);
});

test('should return the 50 percent of 1500', () => {
  expect(percent(50, 1500)).toBe(750);
});
