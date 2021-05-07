var removeDuplicateLetters = function (s) {
    let letterArray = [];

    for (let i = 0; i < s.length; i++) {
        if (!letterArray.includes(s[i])) {
            letterArray.push(s[i]);
        }
    }

    return letterArray.sort().join("");
};

const string = "cbacdcbc";

