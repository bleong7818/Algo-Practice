function squareDigits(num) {
    //may the code be with you
    let stringVer = num.toString().split("");
    let stringArray = [];
    for (let i = 0; i < stringVer.length; i++) {
        let num = parseFloat(stringVer[i]);
        let squared = num * num;
        stringArray.push(squared.toString());
    }
    return parseFloat(stringArray.join(""));
}