/*
 * src/arrays/flatten.ts
 * Exercise stub for flattening nested arrays.
 */

type NestedArray<T> = (T | NestedArray<T>)[];

export const flatten = <T>(arr: NestedArray<T>): T[] => {
  const result: T[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten<T>(item));
    } else {
      result.push(item);
    }
  }
  return result;
};
