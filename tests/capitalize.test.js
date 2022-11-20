import assert from 'node:assert/strict';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('hello'), 'Hello')

console.log('Все тесты пройдены!');