function caesarCipherEncryptor(string, key) {
    // Write your code here.
    const actualKey = key % 26;
    const newLetters = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (const letter of string) {
        const newKey = (alphabet.indexOf(letter) + actualKey) % 26;
        const newLetter = alphabet[newKey];
        newLetters.push(newLetter);
    }

    return newLetters.join('');
}