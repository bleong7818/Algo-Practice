var findPeakElement = function (nums) {
    let peaks = [];

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (nums[i - 1] && nums[i + 1]) {
            if (current > nums[i + 1] && current > nums[i - 1]) {
                peaks.push(i);
            }
        }

        if (nums[i - 1] && !nums[i + 1]) {
            if (current > nums[i - 1]) {
                peaks.push(i);
            }
        }

        if (!nums[i - 1] && nums[i + 1]) {
            if (current > nums[i + i]) {
                peaks.push(i);
            }
        }
    }

    return peaks;
};