function rollTheString(s, roll) {
    let newStringSplit = s.split("");
    for (let i = 0; i < roll.length; i++) {
        let rollNum = roll[i];
        for (let j = 0; j <= rollNum; j++) {
            let currentChar = newStringSplit[j];
            let newChar = rollChar(currentChar);
            newStringSplit[j] = newChar;

        }
    }
    return newStringSplit.join("");
}

function rollChar(char) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let charIndex = alphabet.indexOf(char);
    let newChar = alphabet[(charIndex + 1) % 26];
    return newChar;
}

let string = "abz";
let roll = [3, 2, 1];