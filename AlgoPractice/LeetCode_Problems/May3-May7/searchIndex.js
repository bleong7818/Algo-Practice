var search = function (nums, target) {
    let index = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            index = i;
        }
    }
    return index;
};

var search = function(nums, target) {
    return nums.indexOf(target);
};
