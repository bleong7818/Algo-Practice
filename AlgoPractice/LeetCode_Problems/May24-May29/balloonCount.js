/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let nCount = 0, bCount = 0, oCount = 0, aCount = 0, lCount = 0;
    let balloonCount = 0;

    for (const letter of text) {
        if (letter === "n") nCount++;
        if (letter === "b") bCount++;
        if (letter === "o") oCount++;
        if (letter === "a") aCount++;
        if (letter === "l") lCount++;

        if (nCount >= 1
            && bCount >= 1
            && oCount >= 2
            && aCount >= 1
            && lCount >= 2) {
            balloonCount++;
            nCount--, bCount--, oCount -= 2, aCount--, lCount -= 2;
        }
    }

    return balloonCount;
};