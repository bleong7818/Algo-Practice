var sortArray = function (nums) {
    while (true) {
        let swap = false;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                swap = true;
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
            }
        }
        if (!swap) return nums;
    }
};