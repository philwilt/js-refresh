/*
 * src/patterns/memoize.ts
 * Exercise stub for implementing memoization.
 */

export const memoize = <Args extends unknown[], R>(
  fn: (...args: Args) => R,
): ((...args: Args) => R) => {
  const cache: Map<string, R> = new Map();

  return (...args: Args): R => {
    const cacheKey = JSON.stringify(args);

    if (cache.has(cacheKey)) return cache.get(cacheKey) as R;

    const result = fn.apply(this, args);
    cache.set(cacheKey, result);

    return result as R;
  };
};
