var getIntersectionNode = function (headA, headB) {

    let l1 = headA, l2 = headB;
    const hashMap = new Map();

    while (l1) {
        hashMap.set(l1, true);
        l1 = l1.next;
    }

    while (l2) {
        if (hashMap.has(l2)) {
            return l2;
        }
        l2 = l2.next;
    }
    return null;
};