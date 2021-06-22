var getDecimalValue = function (head) {
    let str = "";
    let current = head;

    while (current) {
        str += current.val;
        current = current.next;
    }

    return parseInt(str, 2);
};