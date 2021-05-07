var countBinarySubstrings = function (s) {
    let prevRunLength = 0;
    let currentRunLength = 1;
    let res = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            currentRunLength++;
        } else {
            prevRunLength = currentRunLength;
            currentRunLength = 1;
        }

        if (prevRunLength >= currentRunLength) res++;
    }
    return res;
};
