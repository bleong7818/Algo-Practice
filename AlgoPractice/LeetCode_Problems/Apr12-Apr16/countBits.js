var countBits = function (num) {
    let oneArray = [];

    for (let i = 0; i <= num; i++) {
        let binaryRep = i.toString(2);
        let ones = 0;
        for (let j = 0; j < binaryRep.length; j++) {
            if (binaryRep[j] === "1") {
                ones += 1;
            }
        }
        oneArray.push(ones);
    }
    return oneArray;
};