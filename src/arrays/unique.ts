/*
 * src/arrays/unique.ts
 * Exercise stub for returning unique array values.
 */

export const unique = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
}

