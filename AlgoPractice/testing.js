function decLength(array, index) {
    let length = 0;

    while (array[index] >= array[index - 1] && index >= 1) {
        if (array[index] >= array[index - 1]) {
            length += 1;
        }
        index--;
    }
    return length;
}

function incLength(array, index) {
    let length = 0;

    while (array[index] >= array[index + 1] && index <= array.length - 1) {
        if (array[index] >= array[index + 1]) {
            length += 1;
        }
        index++;
    }
    return length;
}

let array = [10, 11, 8, 7, 0];
let index = 3;

console.log(incLength(array, 1));