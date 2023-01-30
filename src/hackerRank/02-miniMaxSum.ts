/** English
 * @function miniMaxSum
 * @description Calculates the minimum and maximum sum of the elements of a given array of numbers and displays them to the console.
 * @param {number[]} arr - An array of numbers
 * @returns {void} - Displays the minimum and maximum sum to the console
 */

/** Español
 * @function miniMaxSum
 * @description Calcula la suma mínima y máxima de los elementos de una matriz de números y los muestra en la consola.
 * @param {number[]} arr - Una matriz de números
 * @returns {void} - Muestra la suma mínima y máxima en la consola
 */

const miniMaxSum = (arr: number[]): void => {
  const arrOrder = arr.sort((a, b) => a - b);

  const sumMax = arrOrder.slice(1).reduce((acc, curr) => acc + curr, 0);
  const sumMin = arrOrder.slice(0, 4).reduce((acc, curr) => acc + curr, 0);

  console.log(sumMin, sumMax);
};

export { miniMaxSum };
