var containsNearbyDuplicate = function (nums, k) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash && Math.abs(hash[nums[i]] - i) <= k) {
            return true;
        }
        hash[nums[i]] = i;
    }
    return false;
};