import { describe, expect, it, vi } from "vitest";
import { retry } from "../../src/async/retry";

describe("retry", () => {
  it("retries a failing async function until it succeeds", async () => {
    const fn = vi
      .fn<[], Promise<string>>()
      .mockRejectedValueOnce(new Error("fail 1"))
      .mockRejectedValueOnce(new Error("fail 2"))
      .mockResolvedValue("ok");

    await expect(retry(fn, 2)).resolves.toBe("ok");
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it("rejects with the last error after max retries", async () => {
    const error = new Error("always fails");
    const fn = vi.fn<[], Promise<string>>().mockRejectedValue(error);

    await expect(retry(fn, 2)).rejects.toBe(error);
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
