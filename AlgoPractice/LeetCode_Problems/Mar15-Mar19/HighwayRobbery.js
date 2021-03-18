var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let robbery = new Array(nums.length);
    robbery[0] = nums[0];
    robbery[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        robbery[i] = Math.max(robbery[i - 2] + nums[i], robbery[i - 1]);
    }
    return robbery[robbery.length - 1];

};