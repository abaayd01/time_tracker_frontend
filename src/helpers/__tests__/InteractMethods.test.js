// const InteractMethods = require('../InteractMethods.js');
import InteractMethods from '../InteractMethods';

test('rounds up correctly', () => {
    expect(InteractMethods.round(6, 10)).toBe(10);
    expect(InteractMethods.round(6.5, 10)).toBe(10);
});

test('rounds up negative values correctly', () => {
    expect(InteractMethods.round(-6, 10)).toBe(-10);
    expect(InteractMethods.round(-6.5, 10)).toBe(-10);
});

test('rounds down correctly', () => {
    expect(InteractMethods.round(4, 10)).toBe(0);
    expect(InteractMethods.round(4.5, 10)).toBe(0);
});

test('rounds down negative values correctly', () => {
    expect(InteractMethods.round(-4, 10)).toBe(0);
    expect(InteractMethods.round(-4.5, 10)).toBe(0);
});