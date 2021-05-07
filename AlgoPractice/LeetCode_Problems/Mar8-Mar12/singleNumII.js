var singleNumber = function (nums) {
    let numHash = {};

    for (const num of nums) {
        if (num in numHash) {
            numHash[num] = false;
        }
        else {
            numHash[num] = true;
        }
    }

    for (const key in numHash) {
        if (numHash[key] === true) {
            return key;
        }
    }
};

var singleNumber = function (nums) {
    let numHash = {};

    for (const num of nums) {
        numHash[num] = ++numHash[num] || 1;
    }

    for (const key in numHash) {
        if ((numHash[key]) === 1) return key;
    }
};