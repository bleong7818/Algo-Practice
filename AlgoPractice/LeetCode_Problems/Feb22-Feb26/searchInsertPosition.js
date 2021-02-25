var searchInsert = function (nums, target) {
    if (target === 0) return 0;

    let i = 0;

    for (i = 0; i < nums.length; i++) {
        if (target < nums[i] || nums[i] === target) {
            return i;
        }
    }

    return i;
};