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

export { capitalize, reverseString, calculator };
