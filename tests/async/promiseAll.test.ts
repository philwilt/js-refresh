import { describe, expect, it } from "vitest";
import { promiseAll } from "../../src/async/promiseAll";

describe("promiseAll", () => {
  it("resolves values in input order", async () => {
    await expect(
      promiseAll([
        Promise.resolve(1),
        new Promise<number>((resolve) => setTimeout(() => resolve(2), 10)),
        3
      ])
    ).resolves.toEqual([1, 2, 3]);
  });

  it("rejects when any promise rejects", async () => {
    const error = new Error("boom");
    const rejectingThenable = {
      then: (_resolve: (value: unknown) => void, reject: (reason?: unknown) => void) => {
        reject(error);
      }
    };

    await expect(
      promiseAll([Promise.resolve(1), rejectingThenable, Promise.resolve(3)])
    ).rejects.toBe(error);
  });

  it("resolves empty input to an empty array", async () => {
    await expect(promiseAll([])).resolves.toEqual([]);
  });
});
