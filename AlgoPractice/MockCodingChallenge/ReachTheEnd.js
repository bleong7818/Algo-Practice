function reachTheEnd(grid, maxTime) {
    // Write your code here
    timeTaken = 0;
    let row = 0;
    let column = 0;
    let position = [0, 0];
    let endLength = grid[grid.length - 1].length - 1;
    let endPoint = grid[grid.length - 1][endLength];

    while (position !== endPoint) {
        if (grid[row + 1][column] === ".") {
            position = [row + 1][column];
            timeTaken += 1;
        }
        else if (grid[row][column + 1]) {
            position = [row][column + 1];
            timeTaken += 1;
        }
        else {
            return "no";
        }
    }
}

let grid = ["..##", "#.##", "#..."];