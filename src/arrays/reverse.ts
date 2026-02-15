/*
 * src/arrays/reverse.ts
 * Exercise stub for implementing array reversal logic.
 */

export const reverse = <T>(arr: T[]): T[] => {
  const revArray: T[] = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    revArray.push(arr[i]);
  }

  return revArray;
};
