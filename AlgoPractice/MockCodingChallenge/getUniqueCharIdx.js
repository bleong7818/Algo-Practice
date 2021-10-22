function getUniqueCharacter(s) {
    // Write your code here
    let uniqueHash = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char in uniqueHash) {
            uniqueHash[char] = -1;
        } else {
            uniqueHash[char] = i + 1;
        }
        // debugger
    }
    let values = Object.values(uniqueHash).sort((a, b) => a - b);
    for (let j = 0; j < values.length; j++) {
        if (values[j] !== -1) {
            return values[j];
        }
    }
    return -1;
}
const stats = "hackthegame";
console.log(getUniqueCharacter(stats));
