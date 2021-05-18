var sortArray = function (nums) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                sorted = false;
                let num = nums[i];
                let num2 = nums[i + 1];
                nums[i] = num2;
                nums[i + 1] = num;
            }
        }
    }
    return nums;
};