function isPalindrome(str) {
    console.log(str);
    let reversed = str.reverse().join("");
    console.log(reversed);
    return str === reversed;
}

function scatterPalindrome(strToEvaluate) {
    // Write your code here
    let string = strToEvaluate.pop();
    let splitString = string.split("");
    let palindromes = [];
    for (let i = 0; i < splitString.length; i++) {
        palindromes.push(splitString[i]);
        for (let j = i + 1; j < splitString.length; j++) {
            const testing = splitString.slice(i, j);
            // isPalindrome(testing);
            if (isPalindrome(testing)) {
                palindromes.push(testing);
            }
        }
    }
    return palindromes.length;
}
const string = ['aabb'];
console.log(scatterPalindrome(string));