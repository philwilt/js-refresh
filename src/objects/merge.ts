/*
 * src/objects/merge.ts
 * Exercise stub for object merge behavior.
 */

type PlainObject = Record<string, unknown>;

const isPlainObject = (value: unknown): value is PlainObject => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

export const merge = (a: PlainObject, b: PlainObject): PlainObject => {
  const result: PlainObject = { ...a };

  for (const key in b) {
    const leftValue = a[key];
    const rightValue = b[key];

    if (isPlainObject(leftValue) && isPlainObject(rightValue)) {
      result[key] = merge(leftValue, rightValue);
    } else {
      result[key] = rightValue;
    }
  }

  return result;
};
