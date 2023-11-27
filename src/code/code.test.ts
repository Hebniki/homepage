import { test, describe, expect } from "vitest";
import { add, multiply, sum } from "./index";

describe("Basic tests", () => {
  test("adds two numbers", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(2, 2)).toEqual(4);
  });
  test("multiplies two numbers", () => {
    expect(multiply(1, 2)).toEqual(2);
    expect(multiply(2, 2)).toEqual(4);
  });
  test("Sum an array of numbers", () => {
    expect(sum([1, 2, 3])).toEqual(6);
    expect(sum([1, 2, 3, 4])).toEqual(10);
    expect(sum([5, 8, 37])).toEqual(50);
  });
});
