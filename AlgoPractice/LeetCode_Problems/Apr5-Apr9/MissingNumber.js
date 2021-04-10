var missingNumber = function (nums) {
    let max = nums.length;
    let sum = 0;
    for (let i = 1; i <= max; i++) {
        sum += i;
    }
    for (let num of nums) {
        sum -= num;
    }
    return sum;
};