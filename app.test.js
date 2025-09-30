const add = require('./app');

test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('returns number when a single number is passed', () => {
    expect(add("5")).toBe(5);
})
