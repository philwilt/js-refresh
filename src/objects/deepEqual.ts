/*
 * src/objects/deepEqual.ts
 * Exercise stub for deep object equality checks.
 */

type PlainObject = Record<string, unknown>;

const isPlainObject = (value: unknown): value is PlainObject => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const areArraysEqual = (a: unknown[], b: unknown[]): boolean => {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i += 1) {
    if (!deepEqual(a[i], b[i])) return false;
  }

  return true;
};

const areObjectsEqual = (a: PlainObject, b: PlainObject): boolean => {
  const keysA = Object.keys(a);

  if (keysA.length !== Object.keys(b).length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
};

export const deepEqual = (a: unknown, b: unknown): boolean => {
  if (a === b) return true;

  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    return areArraysEqual(a, b);
  }

  if (!isPlainObject(a) || !isPlainObject(b)) {
    return false;
  }

  return areObjectsEqual(a, b);
};
