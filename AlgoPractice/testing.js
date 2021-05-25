function findminDiff(array) {
    let diff = Infinity;

    for (let i = 0; i < array.length; i++) {
        let first = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let second = array[j];
            let abs = Math.abs(first - second);
            if (diff > abs) {
                diff = abs;
            }
        }
    }

    return diff;
}

const arr = [1, 3, 6, 10, 15];

console.log(findminDiff(arr));