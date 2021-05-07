var intersection = function (nums1, nums2) {
    let nums = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !nums.includes(nums1[i])) {
            nums.push(nums1[i]);
        }
    }
    return nums;
};