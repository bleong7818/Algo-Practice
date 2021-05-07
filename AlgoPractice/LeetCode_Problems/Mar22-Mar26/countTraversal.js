var countNodes = function (root) {
    let count = 0;

    function countTraverse(node) {
        if (!node) return count;
        if (node.left) countTraverse(node.left);
        if (node.right) countTraverse(node.right);
        count += 1;
    }
    countTraverse(root);
    return count;
};