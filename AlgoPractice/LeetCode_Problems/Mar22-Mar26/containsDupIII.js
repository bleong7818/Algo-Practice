var containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= k + i; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }
    return false;
};