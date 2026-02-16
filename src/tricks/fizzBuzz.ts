export const fizzBuzzWithLogging = (nArr: number[]): void => {
  nArr.forEach((n) => {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz");
    } else if (n % 5 === 0) {
      console.log("Buzz");
    } else if (n % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(n.toString());
    }
  });
};

export const fizzBuzz = (nArr: number[]): string[] => {
  return nArr.map((n) => {
    if (n % 15 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n.toString();
  });
};
