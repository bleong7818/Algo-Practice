var isPalindrome = function (s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newString = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i].toLowerCase();
        if (alphabet.includes(char)) {
            newString.push(char);
        }
    }
    let p1 = 0;
    let p2 = newString.length - 1;

    while (p1 < p2) {
        if (newString[p1] !== newString[p2]) return false;
        p1++;
        p2--;
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));