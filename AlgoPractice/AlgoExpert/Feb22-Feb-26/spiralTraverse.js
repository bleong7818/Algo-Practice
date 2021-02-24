function spiralTraverse(array) {
    // Write your code here.
    let result = [];
    let startingRow = 0;
    let endRow = array.length - 1;
    let startingCol = 0;
    let endCol = array[0].length - 1;

    while (startingRow <= endRow && startingCol <= endCol) {
        for (let col = startingCol; col <= endCol; col++) {
            result.push(array[startingRow][col]);
        }

        for (let row = startingRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }

        for (let col = endCol - 1; col >= startingCol; col--) {
            if (startingRow === endRow) break;
            result.push(array[endRow][col]);
        }

        for (let row = endRow - 1; row > startingRow; row--) {
            if (startingCol === endCol) break;
            result.push(array[row][startingCol])
        }

        startingRow++;
        endRow--;
        startingCol++;
        endCol--;
    }

    return result;
}