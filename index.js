/**
 * A simple demonstration function for semantic release
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
export function greet(name = 'World') {
  if (typeof name !== 'string') {
    throw new Error('Name must be a string');
  }
  return `Hello, ${name}!`;
}

/**
 * Calculate the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
export function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

// Default export for backwards compatibility
export default {
  greet,
  add
}; console.log('Hello World');
