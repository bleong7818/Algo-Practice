let reverseOnlyLetters = function (S) {
    let letters = S.match(/[a-z]/ig);
    let res = "";

    for (const char of S) {
        if (char.toLowerCase() != char.toUpperCase()) {
            res += letters.pop();
            continue;
        }
        res += i;
    }
    return res;
    
};

const string = "a-bC-dEf-ghIj";
console.log(reverseOnlyLetters(string));