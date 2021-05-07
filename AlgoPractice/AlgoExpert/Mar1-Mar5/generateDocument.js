function generateDocument(characters, document) {
    for (const char of document) {
        const documentFrequency = countCharacterFrequency(char, document);
        const charactersFrequency = countCharacterFrequency(char, characters);
        if (documentFrequency > charactersFrequency) return false;
    }
    return true;
}

function countCharacterFrequency(character, target) {
    let frequency = 0;

    for (const char of target) {
        if (char === character) frequency++;
    }

    return frequency;
}