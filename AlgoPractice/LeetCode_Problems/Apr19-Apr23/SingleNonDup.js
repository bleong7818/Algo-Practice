var singleNonDuplicate = function (nums) {
    if (nums.length === 1) return nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
        if (i === 0) {
            if (nums[i] !== nums[i + 1]) return nums[i];
        }
        else {
            const current = nums[i];
            const prev = nums[i - 1];
            const next = nums[i + 1];

            if (current !== prev && current !== next) {
                return current;
            }
        }
    }
    return nums[nums.length - 1];
};