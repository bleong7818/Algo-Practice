var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const result = [];

    let n1 = 0, n2 = 0;

    while (n1 < nums1.length && n2 < nums2.length) {
        if (nums1[n1] === nums2[n2]) {
            result.push(nums1[n1]);
            n1++;
            n2++;
        } else if (nums1[n1] < nums2[n2]) {
            n1++;
        } else {
            n2++;
        }
    }
    return result;
};