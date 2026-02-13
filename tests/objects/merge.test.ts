import { describe, expect, it } from "vitest";
import { merge } from "../../src/objects/merge";

describe("merge", () => {
  it("deep merges nested plain objects", () => {
    const left = { a: 1, nested: { x: 1 } };
    const right = { b: 2, nested: { y: 2 } };

    expect(merge(left, right)).toEqual({
      a: 1,
      b: 2,
      nested: { x: 1, y: 2 }
    });
  });

  it("prefers right-hand value when keys conflict", () => {
    expect(merge({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
  });

  it("does not mutate input objects", () => {
    const left = { nested: { x: 1 } };
    const right = { nested: { y: 2 } };

    merge(left, right);

    expect(left).toEqual({ nested: { x: 1 } });
    expect(right).toEqual({ nested: { y: 2 } });
  });
});
