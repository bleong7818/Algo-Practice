var countSubstrings = function (s) {
    let numPalindromes = 0;

    for (let i = 0; i <= s.length; i++) {
        for (let j = i; j <= s.length; j++) {
            const piece = s.slice(i, j);
            if (isPalindrome(piece)) numPalindromes++;
        }
    }
    return numPalindromes;
};

function isPalindrome(string) {
    if (string.length === 0) return false;
    return string.split("").reverse().join("") === string;
}

var countSubstrings = function (s) {
    let count = 0;

    const bubbleFromCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++, left--, right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        bubbleFromCenter(i, i);
        bubbleFromCenter(i, i + 1);
    }
    return count;
};