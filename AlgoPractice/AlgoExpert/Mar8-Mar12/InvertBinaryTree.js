function invertBinaryTree(tree) {
    const queue = [tree];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === null) continue;
        swapLeftAndRight(current);
        queue.push(current.left);
        queue.push(current.right);
    }
}

function swapLeftAndRight(node) {
    const left = node.left;
    node.left = node.right;
    node.right = left;
}