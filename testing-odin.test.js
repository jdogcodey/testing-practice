import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testing-odin.js";

test("capitalize function", () => {
  expect(capitalize("test")).toBe("Test");
});

test("reverse string function", () => {
  expect(reverseString("reverse this string")).toBe("gnirts siht esrever");
});

test("calculator add", () => {
  expect(calculator.add(17, 2)).toBe(19);
});

test("calculator subtract", () => {
  expect(calculator.subtract(24, 3)).toBe(21);
});

test("calculator divide", () => {
  expect(calculator.divide(56, 8)).toBe(7);
});

test("calculator multiply", () => {
  expect(calculator.multiply(13, 4)).toBe(52);
});

test("caesar wrap", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesar case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesar punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze example", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze my one", () => {
  expect(analyzeArray([1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("analyze some different numbers", () => {
  expect(
    analyzeArray([1, 14, 3, 5, 7, 4, 33, 56, 43, 23, 34, 87])
  ).toStrictEqual({
    average: 26,
    min: 1,
    max: 87,
    length: 12,
  });
});
