/*
 * src/objects/groupBy.ts
 * Exercise stub for grouping collections by a key selector.
 */

export const groupBy = <T>(
  arr: T[],
  grpFunc: (item: T) => string | number,
): Record<string, T[]> => {
  const result: Record<string, T[]> = {};

  for (const item of arr) {
    const key = String(grpFunc(item));
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }
  return result;
};
