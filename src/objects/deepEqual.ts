/*
 * src/objects/deepEqual.ts
 * Exercise stub for deep object equality checks.
 */

export const deepEqual = <T>(a: T, b: T): boolean => {
  if (a == b) return true;

  if (typeof a != "object" || typeof b != "object" || a == null || b == null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key)) return false;

    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
};
