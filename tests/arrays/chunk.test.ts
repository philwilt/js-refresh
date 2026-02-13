import { describe, expect, it } from "vitest";
import { chunk } from "../../src/arrays/chunk";

describe("chunk", () => {
  it("splits an array into equally sized chunks", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  it("puts remaining items in a smaller final chunk", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5]
    ]);
  });

  it("returns empty output for empty input", () => {
    expect(chunk([], 3)).toEqual([]);
  });
});
