var singleNumber = function (nums) {
    let newHash = {};

    for (const num of nums) {
        if (num in newHash) {
            newHash[num]++;
        }
        else {
            newHash[num] = 1;
        }
    }

    for (const key in newHash) {
        if (newHash[key] === 1) {
            return key;
        }
    }
};