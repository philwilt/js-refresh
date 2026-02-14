/*
 * src/patterns/debounce.ts
 * Exercise stub for implementing debounce behavior.
 */
export const debounce = <Args extends unknown[]>(
  fn: (...args: Args) => unknown,
  delay: number,
): ((...vals: Args) => void) => {
  let delaying = false;
  let handle: ReturnType<typeof setTimeout>;

  return (...vals: Args): void => {
    if (delaying) {
      clearTimeout(handle);
    }

    handle = setTimeout(() => {
      fn(...vals);
    }, delay);

    delaying = true;
  };
};
