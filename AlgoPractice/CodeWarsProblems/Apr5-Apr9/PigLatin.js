function pigIt(str) {
    const puncs = ["?", "!"];
    let newString = [];
    const splitString = str.split(" ");
    for (let i = 0; i < splitString.length; i++) {
        const word = splitString[i];
        // console.log(splitString[i]);
        if (puncs.includes(splitString[i])) {
            newString.push(splitString[i]);
        }
        else {
            newString.push(word.slice(1, word.length) + word[0] + "ay");
        }
    }

    return newString.join(" ");
}