var letterCasePermutation = function (S, counter = -1, substring = '', output = []) {
    if (counter === S.length - 1) {
        output.push(substring);
        return;
    }
    letterCasePermutation(S, counter + 1, substring + String(S[counter + 1]).toLowerCase(), output);
    if (isNaN(S[counter + 1])) {
        letterCasePermutation(S, counter + 1, substring + String(S[counter + 1]).toUpperCase(), output);
    }
    return output;
};