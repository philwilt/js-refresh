import { describe, expect, it, vi } from "vitest";
import { memoize } from "../../src/patterns/memoize";

describe("memoize", () => {
  it("caches result for repeated calls with same arguments", () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const memoized = memoize(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("calls original function for different argument sets", () => {
    const fn = vi.fn((n: number) => n * 2);
    const memoized = memoize(fn);

    expect(memoized(1)).toBe(2);
    expect(memoized(2)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
