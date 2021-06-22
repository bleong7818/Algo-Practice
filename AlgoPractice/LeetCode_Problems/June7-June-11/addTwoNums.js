var addTwoNumbers = function (l1, l2) {
    let firstNum = [];
    let secondNum = [];

    while (l1) {
        firstNum.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        secondNum.push(l2.val);
        l2 = l2.next;
    }

    const firstNumSum = BigInt(firstNum.reverse().join(""));
    const secondNumSum = BigInt(secondNum.reverse().join(""));
    let sum = firstNumSum + secondNumSum;
    let newNumArray = sum.toString().split('').reverse().map(a => parseInt(a));

    let newLl = new ListNode();
    let newLlObj = newLl;
    const newLllen = newNumArray.length;
    for (let i = 0; i < newLllen; i++) {
        newLlObj.next = new ListNode(newNumArray[i]);
        newLlObj = newLlObj.next
    }

    return newLl.next;
};