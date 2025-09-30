const add = require('./app');

test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('returns number when a single number is passed', () => {
    expect(add("5")).toBe(5);
})

test('returns sum of two comma separated numbers', () => {
  expect(add("1, 2")).toBe(3);
});
