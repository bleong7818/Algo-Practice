var nextGreaterElement = function (nums1, nums2) {
    let nextElement = new Array(nums1.length).fill(-1);

    for (let i = 0; i < nums1.length; i++) {
        for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                nextElement[i] = nums2[j];
                break;
            }
        }
    }
    return nextElement;
};