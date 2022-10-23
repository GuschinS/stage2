let check = 0;

function checkMatrix(matrix) {
  let count = 0;
  let maxNumber = 16;
  let row = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (Number(matrix[i][j]) === maxNumber) {
        row = i + 1;
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

export { checkMatrix, check };
