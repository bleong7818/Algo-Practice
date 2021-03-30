function spinWords(string) {
    let splitString = string.split(" ");
    let newString = [];
    for (const s of splitString) {
        if (s.length >= 5) {
            newString.push(s.split("").reverse().join(""));
        }
        else {
            newString.push(s);
        }
    }
    return newString.join(" ");
}