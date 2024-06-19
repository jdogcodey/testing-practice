import { capitalize, reverseString, calculator } from "./testing-odin.js";

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
