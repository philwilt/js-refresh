import { beforeEach, describe, expect, it, vi } from "vitest";
import { debounce } from "../../src/patterns/debounce";

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("delays invocation until wait time has elapsed", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced("a");
    debounced("b");

    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenLastCalledWith("b");
  });

  it("resets timer when called repeatedly", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced();
    vi.advanceTimersByTime(50);
    debounced();
    vi.advanceTimersByTime(99);

    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
