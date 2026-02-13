/*
 * src/async/promiseAll.ts
 * Exercise stub for implementing Promise.all-like behavior.
 */

export const promiseAll = async <T>(
  values: (T | Promise<T>)[],
): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const results: T[] = [];
    let completed = 0;

    if (values.length === 0) {
      resolve([]);
      return;
    }

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((resolved) => {
          results[index] = resolved;
          completed++;

          if (completed === values.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};
