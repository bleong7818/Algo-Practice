var containsDuplicate = function (nums) {
    let seenNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (seenNums.includes(nums[i])) return true;
        seenNums.push(nums[i]);
    }
    return false;
};

//hash version
var containsDuplicate = function (nums) {
    let seenNums = {};
    for (const num of nums) {
        if (num in seenNums) return true;
        seenNums[num] = true;
    }
    return false;
};