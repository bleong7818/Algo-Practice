var reverseOnlyLetters = function (S) {
    let letters = S.match(/[a-z]/ig);
    let res = "";

    for (const char of S) {
        if (char.toLowerCase() != char.toUpperCase()) {
            res += letters.pop();
            continue;
        }
        res += char;
    }
    return res;
}