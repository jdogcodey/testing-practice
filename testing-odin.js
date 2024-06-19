function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(x, y) {
    return x + y;
  },
};

export { capitalize, reverseString, calculator };
