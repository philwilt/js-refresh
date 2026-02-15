/*
 * src/patterns/debounce.ts
 * Exercise stub for implementing debounce behavior.
 */
export const debounce = <Args extends unknown[]>(
  fn: (...args: Args) => unknown,
  delay: number,
): ((...args: Args) => void) => {
  let delaying = false;
  let handle: ReturnType<typeof setTimeout>;

  return (...args: Args): void => {
    if (delaying) {
      clearTimeout(handle);
    }

    handle = setTimeout(() => {
      fn(...args);
    }, delay);

    delaying = true;
  };
};
