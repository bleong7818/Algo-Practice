var maxSequence = function (arr) {
    if (arr.length === 0) return 0;
    let currentMax = 0;
    let bigMax = arr[0];

    for (let i = 0; i < arr.length; i++) {
        currentMax = currentMax + arr[i];
        if (bigMax < currentMax) {
            bigMax = currentMax;
        }
        if (currentMax < 0) {
            currentMax = 0;
        }
    }
    return bigMax;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log()