import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { fizzBuzz, fizzBuzzWithLogging } from "../../src/tricks/fizzBuzz";

describe("fizzBuzz with console.log spying", () => {
  let spy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    spy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("prints Fizz if a number is divisible by 3", () => {
    fizzBuzzWithLogging([3]);

    expect(spy).toHaveBeenCalledWith("Fizz");
  });

  it("prints Buzz if a number is divisible by 5", () => {
    fizzBuzzWithLogging([5]);

    expect(spy).toHaveBeenCalledWith("Buzz");
  });

  it("prints FizzBuzz if a number is divisible by 3 & 5", () => {
    fizzBuzzWithLogging([15]);

    expect(spy).toHaveBeenCalledWith("FizzBuzz");
  });

  it("prints just the number of it is not divisible by 3 or 5", () => {
    fizzBuzzWithLogging([2]);

    expect(spy).toHaveBeenCalledWith("2");
  });

  it("prints the correct numbers and strings for an array of numbers to 5 and 15", () => {
    fizzBuzzWithLogging([1, 2, 3, 4, 5, 15]);

    expect(spy.mock.calls).toEqual([
      ["1"],
      ["2"],
      ["Fizz"],
      ["4"],
      ["Buzz"],
      ["FizzBuzz"],
    ]);
  });
});

describe("fizzBuzz using return value", () => {
  it("returns Fizz with 3", () => {
    expect(fizzBuzz([3])).toEqual(["Fizz"]);
  });

  it("returns Buzz with 5", () => {
    expect(fizzBuzz([5])).toEqual(["Buzz"]);
  });

  it("returns FizzBuzz with 15", () => {
    expect(fizzBuzz([15])).toEqual(["FizzBuzz"]);
  });

  it("returns correct numbers and strings for an array", () => {
    expect(fizzBuzz([1, 2, 3, 4, 5, 15, 16])).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "FizzBuzz",
      "16",
    ]);
  });
});
