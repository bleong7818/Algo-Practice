var findNumbers = function (nums) {
    let evenNums = 0;

    for (const num of nums) {
        const stringVer = num.toString();
        if (stringVer.length % 2 === 0) evenNums++;
    }
    return evenNums;
};