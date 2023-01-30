/** English
 * @function lonelyInteger
 * @description Finds the only integer in an array that occurs only once.
 * @param {number[]} a - The array of integers.
 * @return {number} The integer that occurs only once.
 */

/** Español
 * @función lonelyInteger
 * @descripción Encuentra el único número entero en un arreglo que ocurre solo una vez.
 * @param {number[]} a - El arreglo de números enteros.
 * @return {number} El número entero que ocurre solo una vez.
 */

function lonelyInteger(a: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum ^= a[i];
  }
  return sum;
}

export { lonelyInteger };
