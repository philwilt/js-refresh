/*
 * src/async/promiseAll.ts
 * Exercise stub for implementing Promise.all-like behavior.
 */

export const promiseAll = async <T>(
  promises: (T | Promise<T>)[],
): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const results: T[] = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};
