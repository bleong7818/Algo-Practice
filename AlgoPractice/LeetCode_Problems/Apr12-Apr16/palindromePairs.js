var palindromePairs = function (words) {
    let palindromes = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPalindrome(words[i] + words[j])) palindromes.push([i, j]);
            if (isPalindrome(words[j] + words[i])) palindromes.push([j, i]);
        }
    }
    return palindromes;
};

function isPalindrome(string) {
    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i] !== string[j]) return false;
    }
    return true;
}