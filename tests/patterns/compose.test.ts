import { describe, expect, it } from "vitest";
import { compose } from "../../src/patterns/compose";

describe("compose", () => {
  it("composes functions from right to left", () => {
    const double = (n: number) => n * 2;
    const increment = (n: number) => n + 1;

    expect(compose(double, increment)(3)).toBe(8);
  });

  it("supports composing multiple functions", () => {
    const trim = (s: string) => s.trim();
    const exclaim = (s: string) => `${s}!`;
    const upper = (s: string) => s.toUpperCase();

    expect(compose(upper, exclaim, trim)("  hi  ")).toBe("HI!");
  });

  it("returns identity function when no functions are provided", () => {
    expect(compose()(42)).toBe(42);
  });
});
