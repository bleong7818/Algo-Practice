function maximumOccurringCharacter(text) {
    // Write your code here
    let charMap = new Map();

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        }
        else {
            charMap.set(char, 1);
        }
    }
    let max = 0;
    let finalChar;
    for (const [key, value] of charMap) {
        if (value > max) {
            finalChar = key;
            max = value;
        }
    }

    return finalChar;
}