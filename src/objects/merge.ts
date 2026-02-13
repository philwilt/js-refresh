/*
 * src/objects/merge.ts
 * Exercise stub for object merge behavior.
 */

export const merge = (a: Object, b: Object): Object => {
  const result = { ...a };

  for (const key in b) {
    if (b[key] instanceof Object && key in a && a[key] instanceof Object) {
      result[key] = merge(a[key], b[key]);
    } else {
      result[key] = b[key];
    }
  }

  return result;
};
