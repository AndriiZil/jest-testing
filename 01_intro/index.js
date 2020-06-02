// Test function

function exprect(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log('Success');
      } else {
        console.error(`Value is ${value}, but expectation is ${exp}.`);
      }
    }
  }
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

module.exports = {sum, nativeNull}

// exprect(sum(41, 5)).toBe(46);
// exprect(sum(41, 5)).toBe(45);