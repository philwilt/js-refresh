import { describe, expect, it } from "vitest";
import { compose } from "../../src/patterns/compose";

describe("compose", () => {
  it("composes functions from right to left", () => {
    const double = (n: number) => n * 2;
    const increment = (n: number) => n + 1;
    const composed = compose(double, increment) as (n: number) => number;

    expect(composed(3)).toBe(8);
  });

  it("supports composing multiple functions", () => {
    const trim = (s: string) => s.trim();
    const exclaim = (s: string) => `${s}!`;
    const upper = (s: string) => s.toUpperCase();

    const composed = compose(upper, exclaim, trim) as (s: string) => string;

    expect(composed("  hi  ")).toBe("HI!");
  });

  it("returns identity function when no functions are provided", () => {
    expect(compose()(42)).toBe(42);
  });
});
