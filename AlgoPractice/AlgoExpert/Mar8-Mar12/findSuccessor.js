function findSuccessor(tree, node) {
    const traversalArray = inOrderTraversal(tree);

    for (let i = 0; i < traversalArray.length; i++) {
        const currentNode = traversalArray[i];

        if (currentNode !== node) continue;

        if (i === traversalArray.length - 1) return null;

        return traversalArray[i + 1];
    }
}

function inOrderTraversal(node, order = []) {
    if (node === null) return order;

    inOrderTraversal(node.left, order);
    order.push(node);
    inOrderTraversal(node.right, order);

    return order;
}