var mergeTwoLists = function (l1, l2) {
    let sortedList = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < l1.length && i2 < l2.length) {

        if (l1[i1].val > l2[i2].val) {
            sortedList.push(l1[i].val);
            i1++;
        }
        else if (l1[i1].val < l2[i2].val) {
            sortedList.push(l2[i].val);
            l2++;
        }
        else if (l1[i1].val === l2[i2].val) {
            sortedList.push(l2[i].val);
            sortedList.push(l1[i].val);
            i1++;
            l2++;
        }
    }

    return sortedList;
};

var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};