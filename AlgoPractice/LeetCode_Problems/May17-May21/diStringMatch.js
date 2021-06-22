var diStringMatch = function (s) {
    let output = [];
    let min = 0;
    let max = s.length;

    for (let i = 0; i <= s.length; i++) {
        if (s[i] === "I") {
            output.push(min);
            min++;
        }
        else {
            output.push(max);
            max--;
        }
    }

    return output;
};