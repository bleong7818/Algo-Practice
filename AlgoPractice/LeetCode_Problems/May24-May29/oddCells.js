var oddCells = function (row, col, indices) {
    let mat = new Array(row).fill(0);
    for (let i = 0; i < row; i++) {
        mat[i] = new Array(col).fill(0);
    }
    const flatIndices = indices.flat();

    // these 2 helper functions are used to increment rows and cols respectively. 
    const incRow = (rowNum) => {
        // incrementing the row
        for (let i = 0; i < mat[rowNum].length; i++) {
            mat[rowNum][i] += 1;
        }
    };

    const incCol = (colNum) => {
        // incrementing the column
        for (let i = 0; i < mat.length; i++) {
            mat[i][colNum] += 1;
        }
    };

    for (let i = 0; i < flatIndices.length; i++) {
        if (i % 2 === 0) {
            incRow(flatIndices[i]);
        }
        else {
            incCol(flatIndices[i]);
        }
    }

    const flatMatrix = mat.flat();
    let odd = 0;
    for (let i = 0; i < flatMatrix.length; i++) {
        if (flatMatrix[i] % 2 === 1) odd++;
    }
    return odd;
};