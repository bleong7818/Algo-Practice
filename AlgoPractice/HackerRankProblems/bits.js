function longestBitonicSubarray(arr) {
    let index = 0;
    let longestLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
            let leftLength = decLength(arr[i], i);
            let rightLength = incLength(arr[i], i);
            let currentLength = leftLength + rightLength + 1;
            if (currentLength > longestLength) {
                index = i;
                longestLength = currentLength;
            }
        }
    }

    return index;
}

function decLength(array, index) {
    let length = 0;

    while (array[index] >= array[index - 1] && index >= 1) {
        if (array[index] >= arrat[index - 1]) {
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
        length++;
    }
    return length;
}

let array = [10, 8, 9, 15, 11, 10];

console.log(longestBitonicSubarray(array));