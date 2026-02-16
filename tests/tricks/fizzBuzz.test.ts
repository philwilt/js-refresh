import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { fizzBuzz } from "../../src/tricks/fizzBuzz";
describe("fizzBuzz", () => {
  let spy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    spy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("prints Fizz if a number is divisible by 3", () => {
    fizzBuzz([3]);

    expect(spy).toHaveBeenCalledWith("Fizz");
  });

  it("prints Buzz if a number is divisible by 5", () => {
    fizzBuzz([5]);

    expect(spy).toHaveBeenCalledWith("Buzz");
  });

  it("prints FizzBuzz if a number is divisible by 3 & 5", () => {
    fizzBuzz([15]);

    expect(spy).toHaveBeenCalledWith("FizzBuzz");
  });

  it("prints just the number of it is not divisible by 3 or 5", () => {
    fizzBuzz([2]);

    expect(spy).toHaveBeenCalledWith("2");
  });

  it("prints the correct numbers and strings for an array of numbers to 5 and 15", () => {
    fizzBuzz([1, 2, 3, 4, 5, 15]);

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
