var rotate = function (nums, k) {
    let last = (nums.length - 1);

    for (let i = 1; i <= k; i++) {
        nums.unshift(nums[last]);
        nums.pop();
    }

    return nums;
};