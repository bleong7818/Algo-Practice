function getSpecialSubstring(s, k, charValue) {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let indexes = [];
    for (let i = 0; i < charValue.length; i++) {
        if (charValue[i] === 0) {
            indexes.push(i);
        }
    }
    let letters = ""
    for (let j = 0; j < indexes.length; j++) {
        letters += alphabet[alphabet.indexOf(indexes[j])];
    }
    return letters;
}

let charValue = [1010111111111111111];