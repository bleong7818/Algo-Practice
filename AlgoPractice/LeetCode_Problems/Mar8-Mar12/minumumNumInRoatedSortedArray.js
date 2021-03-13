var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] < nums[right]) {
            return nums[left];
        }

        const pivot = left + Math.floor((right - left) / 2);

        if (pivot > 0 && nums[pivot] < nums[pivot - 1]) {
            return nums[pivot];
        }

        if (nums[pivot] >= nums[left] && nums[pivot] >= nums[right]) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
};