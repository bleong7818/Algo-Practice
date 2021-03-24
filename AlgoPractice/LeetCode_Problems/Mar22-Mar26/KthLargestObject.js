var findKthLargest = function (nums, k) {
    let sorted = nums.sort((a, b) => a - b);
    let subtract = sorted.length - k;
    return sorted[subtract];
};