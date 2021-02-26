var getRow = function (rowIndex) {
    let pascalArray = [];

    for (let i = 0; i <= rowIndex; i++) {
        const currentArray = [];

        let j = 0;
        while (j <= i) {
            if (j === i || j === 0) {
                currentArray.push(1);
            }
            else {
                currentArray.push(pascalArray[i - 1][j - 1] + pascalArray[i - 1][j])
            }
            j++;
        }
        if (i === rowIndex) {
            return currentArray;
        }
        else {
            pascalArray.push(currentArray);
        }
    }
};