var optimalDivision = function (nums) {
    if (nums.length == 1)
        return nums[0].toString();

    if (nums.length === 2) {
        return nums[0].toString() + "/" + nums[1].toString();
    }

    let res = nums[0].toString() + "/(" + nums[1].toString();

    for (let i = 2; i < nums.length; i++) {
        res += "/" + nums[i].toString();
    }

    return res + ")";
};