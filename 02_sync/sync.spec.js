const Lodash = require('./sync');

describe('Lodash compact', () => {

  let _ = new Lodash();
  let array;

  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'hello']; // No global scope!
  });

  // beforeAll(() => {
  //
  // });
  //
  // afterAll(() => {
  //
  // });
  //
  // afterEach(() => {
  //
  // });

  test('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test('should remove falsy values from array', () => {
    const array = [false, 42, 0, '', true, null, 'hello'];
    const result = [42, true, 'hello'];
    // expect(_.compact(array)).toBe(result); // For primitive types
    expect(_.compact(array)).toEqual(result); // For Objects, Arrays
  });

  test('should NOT contain falsy values', () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain('');
    expect(_.compact(array)).not.toContain(null);
  });

});