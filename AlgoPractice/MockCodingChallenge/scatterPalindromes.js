


function scatterPalindrome(strToEvaluate) {
    let palindromes = 0;

    for (let i = 0; i < strToEvaluate.length; i++) {
        for (let j = i; j < strToEvaluate.length; j++) {
            let substring = strToEvaluate.slice(i, j);
            if (canFormPalindrome(substring)) {
                palindromes++;
            }
        }
    }
    return palindromes;
}


function canFormPalindrome(str) {
    let noOfChars = 256;
    let charArray = Array(noOfChars).fill(0);

    for (let i = 0; i < str.length; i++) {
        charArray[str[i].charCodeAt()]++;
    }
    let odd = 0;
    for (let i = 0; i < noOfChars; i++) {
        if ((charArray[i] & 1) === 1) {
            odd++;

            if (odd > 1) {
                return false;
            }
        }
    }
    return true;
}

function couldBePalindrome(string) {
    let charHash = {};

    for (const char of string) {
        if (charHash[char]) {
            charHash[char]++;
        }
        else {
            charHash[char] = 1;
        }
    }
    let odd = 0;
    for (const key in charHash) {
        if (charHash[key] === 1) {
            odd++;
        }

        if (odd > 1) {
            return false;
        }
    }

    return true;
}


console.log(scatterPalindrome("aabb"));
// console.log(canFormPalindrome("ab"));