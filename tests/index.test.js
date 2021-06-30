const sum = require('../src/index');

// Test de ejemplo
test('should adds 2 + 3 to equals 5', () => {
  expect(sum(2, 3)).toBe(5);
});