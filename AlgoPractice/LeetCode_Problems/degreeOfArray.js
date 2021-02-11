var findDegree = function (array) {
    let degree = 0;

    const nums = {};

    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i];
        if (currentNum in nums) {
            degree += 1;
        } else {
            nums[currentNum] = true;
        }
    }

    return degree;
};

