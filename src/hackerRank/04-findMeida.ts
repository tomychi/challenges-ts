/**
 * @function findMedian
 * @description Finds the median value in an array of numbers
 * @param {number[]} arr - The input array of numbers
 * @returns {number} - The median value in the array
 */

const findMedian = (arr: number[]): number => {
  arr = arr.sort((a, b) => a - b);
  const len = arr.length - 1;
  return arr[len / 2];
};

export { findMedian };

/* The median of a list of numbers is essentially its middle element after sorting. The same number of
elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
Example
The sorted array
. The middle element and the median is .
Function Description
Complete the findMedian function in the editor below.
findMedian has the following parameter(s):Returns
int: the median of the array
Input Format
The first line contains the integer
The second line contains
, the size of
.
space-separated integers*/
