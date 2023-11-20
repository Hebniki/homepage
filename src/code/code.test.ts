import { test, describe, expect } from "vitest";
import { add } from "./index";

describe("Basic tests", () => {
  test("adds two numbers", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(2, 2)).toEqual(4);
  });
});
