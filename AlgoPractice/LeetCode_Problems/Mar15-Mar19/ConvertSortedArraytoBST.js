var sortedListToBST = function (head) {
    if (!head) {
        return null;
    }

    const list = [];
    while (head !== null) {
        list.push(head.val);
        head = head.next;
    }

    return findHead(0, list.length - 1);

    function findHead(start, end) {
        if (start > end) {
            return null;
        }

        const midpoint = Math.ceil((start + end) / 2);
        const left = findHead(start, midpoint - 1);
        const right = findHead(midpoint + 1, end);

        return new TreeNode(list[midpoint], left, right);
    }
};