/*
 * src/arrays/flatten.ts
 * Exercise stub for flattening nested arrays.
 */

export const flatten = <T>(arr: any[]): T[] => {
  const result: T[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
};
