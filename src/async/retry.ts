/*
 * src/async/retry.ts
 * Exercise stub for retrying async operations.
 */

export const retry = async (
  fn: () => Promise<string>,
  count: number,
): Promise<string> => {
  try {
    return await fn();
  } catch (error) {
    if (count <= 0) {
      throw error;
    }
    return retry(fn, count - 1);
  }
};
