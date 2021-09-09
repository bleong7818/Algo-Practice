function rollTheString(s, roll) {
    let splitString = s.split("");
    let newString = "";
    for (let i = 0; i < roll.length; i++) {
        let rollVal = roll[i];
        let slicedString = splitString.slice(0, rollVal);
        let otherPart = splitString.slice(rollVal);
        for (let j = 0; j < slicedString.length; j++) {
            let char = slicedString[j];
            let newChar = rollValue(char);
            slicedString[j] = newChar;
        }
        splitString = (slicedString.join("") + otherPart.join("")).split("");
    }
    //yoyoyoyoyo
    //ayyy lmao
    //hello
    //yolo

    
    return splitString.join("");
}

function rollValue(char) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let oldIndex = alphabet.indexOf(char);
    let newIndex = (oldIndex + 1) % 26;
    return alphabet[newIndex];
}

console.log(rollTheString("abz", [3, 2, 1]));

