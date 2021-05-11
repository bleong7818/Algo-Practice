var uniqueMorseRepresentations = function (words) {
    let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.",
     "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", 
     "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let transforms = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = "";
        for (let j = 0; j < word.length; j++) {
            let index = alphabet.indexOf(word[j]);
            let morseChar = morse[index];
            newWord += morseChar;
        }
        if (!transforms.includes(newWord)) {
            transforms.push(newWord);
        }
    }
    return transforms.length;
};