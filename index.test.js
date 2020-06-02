const { sum, nativeNull } = require('./01_intro');

describe('', () => {
  test('Sum should return of sum of two values.', () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });

  test('Sum should return value correctly comparing to other.', () => {
    expect(sum(2, 3)).toBeGreaterThan(3);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(6);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test('Sum should sum 2 float values correctly', () => {
    // expect(sum(0.1, 0.2)).toBe(0.3);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('Native null function', () => {
  test('should return false value null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // undefined , null , '', 0 => falsy values
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy(); // Not undefined , null , '', 0 => falsy values
    expect(nativeNull()).not.toBeUndefined(); // Not undefined , null , '', 0 => falsy values
  });
});
