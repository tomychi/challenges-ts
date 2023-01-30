/** English
 * @function plusMinus
 * @description Counts the number of positive, negative and zero values in a given array of numbers and returns their ratios.
 * @param {number[]} arr - An array of numbers
 * @returns {void} - Logs the ratios of positive, negative, and zero values to the console
 */

/** Español
 * @function plusMinus
 * @description Cuenta el número de valores positivos, negativos y cero en una matriz dada de números y devuelve sus proporciones.
 * @param {number[]} arr - Una matriz de números
 * @returns {void} - Registra las proporciones de valores positivos, negativos y cero en la consola
 */

const plusMinus = (arr: number[]): void => {
  const len = arr.length;

  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (const n of arr) {
    if (n > 0) {
      positive++;
    } else if (n < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log(positive / len);
  console.log(negative / len);
  console.log(zero / len);
};

export { plusMinus };
