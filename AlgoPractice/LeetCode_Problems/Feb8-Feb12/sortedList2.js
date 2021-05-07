// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only 
// distinct numbers from the original list.Return the linked list sorted as well.


const removeDup = (prev, current) => {
    if (!current) {
        return current;
    }

    if (!current.next) {
        if (prev && prev.val === current.val) {
            return null;
        }
        return current;
    }

    let node = null;

    if (current.val === current.next.val || (prev && prev.val === current.val)) {
        return removeDup(current, current.next);
    } else {
        node = current;
        current.next = removeDup(current, current.next);
    }
    return node;
};

var deleteDuplicates = function (head) {
    head = removeDup(null, head);

    return head;
};