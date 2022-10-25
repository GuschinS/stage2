import { matrixLength } from "./game";

let check = 0;
const endArrayThree = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const endArrayFour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function checkMatrix(matrix) {
  let count = 0;
  let maxNumber = matrixLength;
  let row = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (Number(matrix[i][j]) === maxNumber) {
        if (maxNumber ^ (2 % 2 === 0)) {
          row = i + 1;
        } else {
          row = i;
        }
      }
      for (let k = [j + 1]; k < matrix[i].length; k++) {
        if (Number(matrix[i][j]) > Number(matrix[i][k])) {
          count++;
        }
      }
    }
  }
  check = count + row;
  return check;
}

export { checkMatrix, check, endArrayFour, endArrayThree };
