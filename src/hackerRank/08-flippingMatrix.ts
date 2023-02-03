/**
 * @function flippingMatrix
 * @description This function receives a matrix of numbers as input and returns the maximum sum obtained by flipping a submatrix. The flipping of a submatrix involves exchanging its diagonals, meaning that the elements at the top left and bottom right corners switch places, as well as the elements at the top right and bottom left corners.
 * @param matrix: a 2D array of numbers
 * @returns A number representing the maximum sum obtained by flipping a submatrix.
 */

const flippingMatrix = (matrix: number[][]): number => {
  // Write your code here
  let len = matrix.length / 2;
  let result = 0;

  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      // arriba a la izquiera
      const leftTop = matrix[row][col];

      // arriba a la derecha
      const rightTop = matrix[row][2 * len - col - 1];

      // abajo a la izquierda
      const leftBottom = matrix[2 * len - row - 1][col];

      // abajo a la derecha
      const rightBottom = matrix[2 * len - row - 1][2 * len - col - 1];

      result += Math.max(leftTop, rightTop, leftBottom, rightBottom);
      console.log(`leftTop`, leftTop);
      console.log(`rightTop`, rightTop);
      console.log(`leftBottom`, leftBottom);
      console.log(`rightBottom`, rightBottom);
      console.log('\n\n');
    }
  }

  return result;
};

export { flippingMatrix };
