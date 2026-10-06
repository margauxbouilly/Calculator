const { add, subtract, multiply, divide } = require('../calculator');

// add
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
test('adds negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
});
test('add throws on non-numbers', () => {
    expect(() => add('a', 2)).toThrow('Arguments must be numbers');
});

// subtract
test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});
test('subtract returns negative result', () => {
    expect(subtract(2, 5)).toBe(-3);
});
test('subtract throws on non-numbers', () => {
    expect(() => subtract(1, 'b')).toThrow('Arguments must be numbers');
});

// multiply
test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
});
test('multiplies by zero', () => {
    expect(multiply(5, 0)).toBe(0);
});
test('multiply throws on non-numbers', () => {
    expect(() => multiply('a', 'b')).toThrow('Arguments must be numbers');
});

// divide
test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});
test('divide throws on division by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
test('divide throws on non-numbers', () => {
    expect(() => divide('a', 2)).toThrow('Arguments must be numbers');
});
