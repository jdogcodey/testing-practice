const { array } = require("yargs");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(c, d) {
    return c - d;
  },
  divide(x, y) {
    return x / y;
  },
  multiply(e, f) {
    return e * f;
  },
};

function caesarCipher(string, val) {
  let arrayFromString = string.split("");
  for (let i = 0; i < arrayFromString.length; i++) {
    const thisASCII = arrayFromString[i].charCodeAt();
    if (90 >= thisASCII && thisASCII >= 65) {
      const capitalToConvertASCII = arrayFromString[i].charCodeAt();
      let newCapitalASCII = capitalToConvertASCII + val;
      arrayFromString[i] = String.fromCharCode(
        recursiveConvert(newCapitalASCII, 90, 65)
      );
    } else if (122 >= thisASCII && thisASCII >= 97) {
      const lowerToConvertASCII = arrayFromString[i].charCodeAt();
      let newLowerASCII = lowerToConvertASCII + val;
      arrayFromString[i] = String.fromCharCode(
        recursiveConvert(newLowerASCII, 122, 97)
      );
    }
  }
  return arrayFromString.join("");
}

function recursiveConvert(initialVal, upperBound, lowerBound) {
  if (initialVal > upperBound) {
    return recursiveConvert(initialVal - 26, upperBound, lowerBound);
  } else if (initialVal < lowerBound) {
    return recursiveConvert(initialVal + 26, upperBound, lowerBound);
  } else return initialVal;
}

function analyzeArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return {
    average: Math.round(total / array.length),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
