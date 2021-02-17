function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let midpoint = Math.floor((start + end) / 2);
        let currentNum = array[midpoint];

        if (currentNum === target) {
            return midpoint;
        } else if (currentNum < target) {
            start = midpoint + 1;
        } else {
            end = midpoint - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));