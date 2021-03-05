function firstDuplicateValue(array) {
    let arrayValues = {};
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (value in arrayValues) {
            return arrayValues[value];
        }
        else {
            arrayValues[value] = value;
        }
    }

    return -1;
}

let array = [2, 1, 5, 2, 3, 3, 4];
console.log(firstDuplicateValue(array));