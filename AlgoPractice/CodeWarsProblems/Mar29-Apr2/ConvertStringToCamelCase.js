function toCamelCase(str) {
    const splitByChar = str.split("-");
    const splitByUnder = str.split("_");
    let currentString = "";
    if (splitByChar.length > splitByUnder.length) {
        currentString = splitByChar;
    }
    else {
        currentString = splitByUnder;
    }
    let newString = [];
    for (let i = 0; i < currentString.length; i++) {
        if (i === 0) {
            newString.push(currentString[i]);
        }
        else {
            newString.push(capFirstChar(currentString[i]));
        }
    }

    return newString.join("");
}

function capFirstChar(string) {
    let newString = [];

    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            newString.push(string[i].toUpperCase());
        }
        else {
            newString.push(string[i]);
        }
    }

    return newString.join("");
}

let warrior = "the-stealth-warrior";
let hi = "hi";
console.log(toCamelCase(warrior));
// console.log(capFirstChar(hi));