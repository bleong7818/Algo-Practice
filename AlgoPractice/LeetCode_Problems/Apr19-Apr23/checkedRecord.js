var checkRecord = function (s) {
    let absentCount = 0;
    if (s.includes("LLL")) return false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") absentCount += 1;
    }

    return absentCount < 2;
};

var checkRecord = function (s) {
    let absentCount = 0;
    if (s.includes("LLL")) return false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") absentCount += 1;
        if (absentCount === 2) return false;
    }

    return true;
};