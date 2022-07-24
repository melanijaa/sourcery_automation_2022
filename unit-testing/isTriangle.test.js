const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
    expect(isTriangle(4, 3, 5)).toBe(true);
    expect(isTriangle(3, 5, 4)).toBe(true);
    expect(isTriangle(5, 3, 4)).toBe(true);
    expect(isTriangle(5, 4, 3)).toBe(true);
    expect(isTriangle(4, 5, 3)).toBe(true);
});

test('0, 4, 5 is not triangle', () => {
    expect(isTriangle(0, 4, 5)).toBe(false);
});

test('-4, 5, 6 is not triangle', () => {
    expect(isTriangle(-4, 5, 6)).toBe(false);
});

test('A, 4, 5 is not triangle', () => {
    expect(isTriangle('A', 4, 5)).toBe(false);
});

test('100000, 4, 5 is not triangle', () => {
    expect(isTriangle(100000, 4, 5)).toBe(false);
});

test('6.5, 4, 5 is triangle', () => {
    expect(isTriangle(6.5, 4, 5)).toBe(true);
});

test('0, 0, 0 is not triangle', () => {
    expect(isTriangle(0, 0, 0)).toBe(false);
});

test('a, b, c is not triangle', () => {
    expect(isTriangle('a', 'b', 'c')).toBe(false);
});

test('3.2, 4.2, 5.2 is triangle', () => {
    expect(isTriangle(3.2, 4.2, 5.2)).toBe(true);
});

test('1, 1, 1 is triangle', () => {
    expect(isTriangle(1, 1, 1)).toBe(true);
});