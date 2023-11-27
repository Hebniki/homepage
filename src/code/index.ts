export const add = (a: number, b: number) => a + b;

export const multiply = (a: number, b: number) => a * b;

export const sum = (numbers: number[]) => {
  let result = 0;
  for (const number of numbers) {
    result = result + number;
  }
  return result;
};
