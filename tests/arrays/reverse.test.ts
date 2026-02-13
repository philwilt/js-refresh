import { describe, it, expect } from "vitest";
import { reverse } from "../../src/arrays/reverse";

describe("reverse", () => {
  it("returns a new array in reverse order", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it("returns empty array when input is empty", () => {
    expect(reverse([])).toEqual([]);
  });

  it("does not mutate the original array", () => {
    const input = [1, 2, 3];
    reverse(input);
    expect(input).toEqual([1, 2, 3]);
  });
});