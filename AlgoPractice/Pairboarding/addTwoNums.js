var addTwoNumbers = function (l1, l2) {
    //     go through l1 => [l1Nums] => l1Sum;
    //     go through l2 => [l2Nums] => l2Sum;

    //     let newSum = l1Sum + l2Sum;

    //     let split = newSum.split(''); //[7, 8, 0, 7];

    //     let final = new ListNode();
    //     hello
    // hi
    let firstSum = iterateList(l1);
    let secondSum = iterateList(l2);
    if (firstSum.length !== secondSum.length) {
        if (firstSum.length > secondSum.length) {
            const difference = firstSum.length - secondSum.length;
            for (let i = 0; i < difference; i++) {
                secondSum.unshift(0);
            }
        }
        else {
            const difference = secondSum.length - firstSum.length;
            for (let i = 0; i < difference; i++) {
                firstSum.unshift(0);
            }
        }
    }

    
    let total = (firstSum) + (secondSum);
    console.log(total);

    let stringVer = total.toString();

    let final = new ListNode();
    let linkedList = newListNode(final, stringVer);
    return linkedList.next;
};

function newListNode(node, array) {
    let current = node;
    // let next = node.next;

    for (let i = 0; i < array.length; i++) {
        let num = parseInt(array[i]);
        let newNode = new ListNode(num);
        current.next = newNode;
        current = current.next;
    }
    return node;
}

function iterateList(list) {
    let values = [];
    let temp = list;
    while (temp) {
        values.push(temp.val);
        temp = temp.next;
    }
    return values;
}