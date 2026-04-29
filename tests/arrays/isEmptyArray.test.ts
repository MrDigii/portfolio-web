import { expect, test } from 'vitest';
import { isEmptyArray } from '../../lib/arrays';

test('passing no parameter', () => {
    expect(isEmptyArray()).toBe(undefined);
});

test('passing empty array', () => {
    expect(isEmptyArray([])).toBe(true);
});

test('passing array with values', () => {
    expect(isEmptyArray(['valA', 'valB', 'valC'])).toBe(false);
});
