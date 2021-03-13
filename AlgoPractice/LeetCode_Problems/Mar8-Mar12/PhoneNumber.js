var letterCombinations = function (digits) {
    let combos = [];
    let digitsHash = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };

    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];

        if (combos.length === 0) {
            for (let j = 0; j < digitsHash[digit].length; j++) {
                combos.push(digitsHash[digit][j]);
            }
        } else {
            let newCombo = [];
            for (let n = 0; n < combos.length; n++) {
                for (let j = 0; j < digitsHash[digit].length; j++) {
                    let currentElement = combos[n];
                    let currentString = digitsHash[digit][j];
                    newCombo.push(currentElement + currentString);
                }
            }
            combos = newCombo;
        }
    }

    return combos;
};