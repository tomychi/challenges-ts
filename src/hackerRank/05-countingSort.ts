/**
 * @function countingSort
 * @description Counts the number of times each value appears in an array of integers
 * @param {number[]} arr - The input array of integers
 * @returns {number[]} - A frequency array of 100 elements
 */

const countingSort = (arr: number[]): number[] => {
  let result = new Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    result[number] += 1;
  }

  return result;
};

export { countingSort };
