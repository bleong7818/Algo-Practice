function isPalindrome(string) {
    // Write your code here.
    let test = string.split("").reverse().join("");
    return string === test;
}

function isPalindrome(string) {
    // Write your code here.
    let i = 0;
    let j = string.length - 1;

    while (i <= j) {
        if (string[i] !== string[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}
