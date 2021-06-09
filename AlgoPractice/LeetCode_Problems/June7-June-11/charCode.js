var freqAlphabets = function (s) {
    let str = "";

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i + 2) === "#") {
            const char = s.slice(i, i + 2);
            console.log(char);
            str += String.fromCharCode(parseInt(char) + 96);
            i += 2;
        }
        else {
            const char = s.charAt(i);
            str += String.fromCharCode(parseInt(char) + 96);
        }
    }
    return str;
};

const s = "10#11#12";

console.log(freqAlphabets(s));