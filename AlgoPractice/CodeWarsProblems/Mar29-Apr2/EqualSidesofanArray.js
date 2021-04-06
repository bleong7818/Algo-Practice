function findEvenIndex(arr) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = sumArray(arr.slice(0, i));
        let rightSum = sumArray(arr.slice(i + 1, arr.length));
        if (leftSum === rightSum) index = i;
    }
    return index;
}

function sumArray(array) {
    if (array.length === 0) return 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}