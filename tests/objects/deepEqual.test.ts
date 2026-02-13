import { describe, expect, it } from "vitest";
import { deepEqual } from "../../src/objects/deepEqual";

describe("deepEqual", () => {
  it("returns true for deeply equal nested structures", () => {
    expect(deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] })).toBe(true);
  });

  it("returns false when nested values differ", () => {
    expect(deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 3 }] })).toBe(false);
  });

  it("handles null values correctly", () => {
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(null, {})).toBe(false);
  });
});
