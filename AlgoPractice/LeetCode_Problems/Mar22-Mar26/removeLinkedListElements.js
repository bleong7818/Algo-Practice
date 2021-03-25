var removeElements = function (head, val) {
    let dummy = new ListNode();
    let curr = dummy;

    while (head !== null) {
        if (head.val !== val) {
            curr.next = head;
            curr = curr.next;
        }
        head = head.next;
    }
    curr.next = null;
    return dummy.next;
};