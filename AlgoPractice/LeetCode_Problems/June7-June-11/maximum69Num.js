var maximum69Number = function (num) {
    let stringVer = num.toString();

    for (let i = 0; i < stringVer.length; i++) {
        let char = stringVer[i];
        if (char === "6") {
            let newString = setCharAt(stringVer, i, "9");
            return parseInt(newString);
        }
    }

    return parseInt(stringVer);
};

function setCharAt(str, index, char) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + char + str.substring(index + 1);
}