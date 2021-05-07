var maximumProduct = function (nums) {
    let max1, max2, max3, min1, min2;
    max1 = max2 = max3 = -Infinity;
    min1 = min2 = Infinity;

    for (const num of nums) {
        if (num <= min1) {
            min2 = min1;
            min1 = num;
        } else if (num <= min2) {
            min2 = num;
        }

        if (num >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num >= max2) {
            max3 = max2;
            max2 = num;
        } else if (num >= max3) {
            max3 = num;
        }
    }
    return Math.max(max3 * max2 * max1, min1 * min2 * max1);
};