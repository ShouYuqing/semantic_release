import { greet, add } from './index.js';

describe('greet function', () => {
  test('should return a greeting with default name', () => {
    expect(greet()).toBe('Hello, World!');
  });

  test('should return a greeting with provided name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('should throw error for non-string input', () => {
    expect(() => greet(123)).toThrow('Name must be a string');
  });
});

describe('add function', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should add negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('should add zero', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('should throw error for non-number inputs', () => {
    expect(() => add('1', 2)).toThrow('Both arguments must be numbers');
    expect(() => add(1, '2')).toThrow('Both arguments must be numbers');
  });
}); 