import { capitalize } from "./testing-odin.js";

test("capitalize function", () => {
  expect(capitalize("test")).toBe("Test");
});

test("reverse string function", () => {
  expect(reverseString("reverse this string")).toBe("gnirts siht esrever");
});
