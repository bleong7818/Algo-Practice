function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;

    while (currentNode !== null) {
        let nextDistinctNode = currentNode.next;
        while (nextDistinctNode !== null && nextDistinctNode.val === currentNode.val) {
            nextDistinctNode = nextDistinctNode.next;
        }

        currentNode.next = nextDistinctNode;
        currentNode = nextDistinctNode;
    }

    return linkedList;
}