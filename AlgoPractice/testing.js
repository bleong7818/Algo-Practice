var longestPalindrome = function (s) {
    if (s.length === 1) return s;
    let longest = "";
    let sArray = s.split("");
    for (let i = 0; i < sArray.length; i++) {
        for (let j = i + 1; j <= sArray.length; j++) {
            let string = sArray.slice(i, j);
            debugger
            if (string.join("") === string.reverse().join("") && string.join("").length > longest.length) {
                debugger
                longest = string.join("");
            }
        }
    }
    return longest;
};

console.log(longestPalindrome("bb"));
