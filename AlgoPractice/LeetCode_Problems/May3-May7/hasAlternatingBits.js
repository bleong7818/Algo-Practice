var hasAlternatingBits = function (n) {
    let bitVer = n.toString(2);

    for (let i = 0; i < bitVer.length - 1; i++) {
        if (bitVer[i] === "0") {
            if (bitVer[i + 1] === "0") return false;
        }
        else {
            if (bitVer[i + 1] === "1") return false;
        }
    }

    return true;
};