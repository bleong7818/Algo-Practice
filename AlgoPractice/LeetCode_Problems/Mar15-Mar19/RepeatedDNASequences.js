var findRepeatedDnaSequences = function (s) {
    let dnaHash = {};
    const output = [];

    for (let i = 0; i < s.length - 9; i++) {
        let currentString = s.slice(i, i + 10);
        if (currentString in dnaHash && !output.includes(currentString)) {
            output.push(currentString);
        }
        else {
            dnaHash[currentString] = true;
        }
    }
    return output;
};