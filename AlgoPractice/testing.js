function isPalindrome(string) {
    // Write your code here.
    let test = string.split("").reverse().join("");
    return string === test;
}

console.log(isPalindrome("aab"));