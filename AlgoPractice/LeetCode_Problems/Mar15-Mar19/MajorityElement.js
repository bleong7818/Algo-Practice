var majorityElement = function (nums) {
    let n = nums.length;
    let majority = Math.floor(n / 2);

    const hashMap = {};
    for (const num of nums) {
        if (num in hashMap) {
            hashMap[num]++;
        }
        else {
            hashMap[num] = 1;
        }
    }
    for (const key in hashMap) {
        if (hashMap[key] > majority) {
            return key;
        }
    }
};