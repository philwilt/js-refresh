import { describe, expect, it } from "vitest";
import { groupBy } from "../../src/objects/groupBy";

describe("groupBy", () => {
  it("groups items by a derived key", () => {
    const input = ["apple", "apricot", "banana", "blueberry"];

    expect(groupBy(input, (item: string) => item[0])).toEqual({
      a: ["apple", "apricot"],
      b: ["banana", "blueberry"]
    });
  });

  it("returns an empty object for empty input", () => {
    expect(groupBy([], (value: unknown) => String(value))).toEqual({});
  });
});
