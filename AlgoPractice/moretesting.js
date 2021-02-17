function letterCase(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

// console.log(letterCase('f'));

function solution(string) {
    const splitString = string.split("");

    let balanceNum = 0;
    for (let i = 0; i < splitString.length; i++) {
        const currentLetter = splitString[i];
        if (letterCase(currentLetter)) {
            if (splitString.includes(currentLetter.toLowerCase())) {
                balanceNum += 1;
            }
        } else {
            if (splitString.includes(currentLetter.toUpperCase())) {
                balanceNum += 1;
            }
        }
    }

    if (balanceNum > 0) {
        return balanceNum;
    } else {
        return -1;
    }
}