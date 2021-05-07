// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.


var maxSubArray = function (nums) {
    if (nums.length === 0) return 0;
    let currentMax = 0;
    let bigMax = nums[0];

    for (let i = 0; i < nums.length; i++) {
        currentMax = currentMax + nums[i];
        if (bigMax < currentMax) {
            bigMax = currentMax;
        }
        if (currentMax < 0) {
            currentMax = 0;
        }
    }
    if(bigMax < 0) return 0;
    return bigMax;
};