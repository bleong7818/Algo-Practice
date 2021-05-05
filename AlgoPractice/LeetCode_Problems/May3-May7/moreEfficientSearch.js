var search = function (nums, target) {
    if (!nums.includes(target)) return -1;
    let index = -1;
    let currentIndex = Math.floor(nums.length / 2);

    while (currentIndex > -1 || currentIndex < nums.length) {
        let currentNum = nums[currentIndex];

        if (currentNum === target) {
            index = currentIndex;
            return index;
        }

        if (currentNum > target) {
            currentIndex--;
        }

        if (currentNum < target) {
            currentIndex++;
        }
    }
    return index;
};