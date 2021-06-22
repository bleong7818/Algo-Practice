/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    let pairs = [];
    const minDiff = findminDiff(arr);

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let second = arr[j];
            let abs = Math.abs(first - second);
            if (abs === minDiff) {
                if (first < second) {
                    pairs.push([first, second]);
                } else {
                    pairs.push([second, first]);
                }
            }
        }
    }
    return pairs;
};

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