import { describe, expect, it } from "vitest";
import { unique } from "../../src/arrays/unique";

describe("unique", () => {
  it("removes duplicate primitive values while preserving order", () => {
    expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
  });

  it("returns an empty array for empty input", () => {
    expect(unique([])).toEqual([]);
  });

  it("treats object references as unique values", () => {
    const a = { id: 1 };
    const b = { id: 1 };

    expect(unique([a, a, b])).toEqual([a, b]);
  });
});
