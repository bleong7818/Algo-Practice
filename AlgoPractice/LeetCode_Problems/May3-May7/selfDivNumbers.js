var selfDividingNumbers = function (left, right) {
    let nums = [];

    while (left <= right) {
        let stringVer = left.toString();
        let isSelfDiv = true;
        for (let i = 0; i < stringVer.length; i++) {
            const currentNum = parseInt(stringVer[i]);
            if (left % currentNum !== 0) {
                isSelfDiv = false;
                break;
            }
        }

        if (isSelfDiv) nums.push(left);
        left++;
    }
    return nums;
};