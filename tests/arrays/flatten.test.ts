import { describe, expect, it } from "vitest";
import { flatten } from "../../src/arrays/flatten";

describe("flatten", () => {
  it("flattens nested arrays of arbitrary depth", () => {
    expect(flatten([1, [2, [3, [4]]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns a new flat array when input is already flat", () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("does not mutate the original array", () => {
    const input = [1, [2, 3]];
    flatten(input);

    expect(input).toEqual([1, [2, 3]]);
  });
});
