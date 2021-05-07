function runLengthEncoding(string) {
    const stringChars = [];
    let currentRunLength = 1;

    for (let i = 1; i < string.length; i++) {
        const currentChar = string[i];
        const previousChar = string[i - 1];

        if (currentChar !== previousChar || currentRunLength === 9) {
            stringChars.push(currentRunLength.toString());
            stringChars.push(previousChar);
            currentRunLength = 0;
        }
        currentRunLength++;
    }

    stringChars.push(currentRunLength.toString());
    stringChars.push(string[string.length - 1]);

    return stringChars.join('');
}