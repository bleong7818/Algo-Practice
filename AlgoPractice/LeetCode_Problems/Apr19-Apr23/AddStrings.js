var addStrings = function (num1, num2) {
    const firstNum = parseInt(num1);
    const secondNum = parseInt(num2);

    let sum = firstNum + secondNum;
    return sum.toString();
};

//small string solution

var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let res = "";

    while (i > -1 || j > -1) {
        let d1 = i > -1 ? parseInt(num1.charAt(i) - '0') : 0;
        let d2 = j > -1 ? parseInt(num2.charAt(j) - '0') : 0;
        let sum = d1 + d2 + carry;
        res += sum % 10;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    if (carry == 1) {
        res += carry;
    }

    return res.split("").reverse().join("");
};