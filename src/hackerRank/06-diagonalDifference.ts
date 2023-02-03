/** English
 * @function
 * @description Calculates the difference between the sum of the two diagonals of a two-dimensional array.
 * @param {number[][]} arr - A two-dimensional array of numbers.
 * @return {number} - The difference between the sum of the two diagonals.
 * @example
 *      const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 *      console.log(diagonalDifference(arr));
 *      Output: 0
 */

/** Español
 * @function
 * @description Calcula la diferencia entre la suma de las dos diagonales de una matriz bidimensional.
 * @param {number[][]} arr - Una matriz bidimensional de números.
 * @return {number} - La diferencia entre la suma de las dos diagonales.
 * @example
 *      const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 *      console.log(diagonalDifference(arr));
 *      Salida: 0
 */

const diagonalDifference = (arr: number[][]): number => {
  let sumPrincipal = 0;
  let sumSecondary = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) {
        sumPrincipal += arr[i][i];
      }
      if (i + j === len - 1) {
        sumSecondary += arr[i][j];
      }
    }
  }
  return Math.abs(sumPrincipal - sumSecondary);
};

export { diagonalDifference };
