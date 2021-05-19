var repeatedNTimes = function (nums) {
    const frequency = Math.floor(nums.length / 2);
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i];
        if (ele in map) {
            map[ele]++;
            if (map[ele] === frequency) {
                return ele;
            }
        }
        else {
            map[ele] = 1;
        }
    }
};