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
