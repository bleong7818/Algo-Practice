function findThreeLargestNumbers(array) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    for (const num of array) {
        if (num > max1) {
            [max1, max2, max3] = [num, max1, max2];
        }
        else if (num > max2) {
            [max2, max3] = [num, max2];
        }
        else if (num > max3) {
            max3 = num;
        }
    }

    return [max3, max2, max1];
}
