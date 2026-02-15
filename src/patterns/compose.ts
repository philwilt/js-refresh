/*
 * src/patterns/compose.ts
 * Exercise stub for function composition.
 */

export const compose = (
  ...fns: Array<(value: unknown) => unknown>
): ((value: unknown) => unknown) => {
  return (value: unknown) => {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
};
