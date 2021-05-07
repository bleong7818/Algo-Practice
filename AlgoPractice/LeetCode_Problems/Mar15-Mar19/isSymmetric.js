var isSymmetric = function (root) {
    return root === null || isMirror(root.left, root.right);
};

function isMirror(leftNode, rightNode) {
    if (leftNode === null && rightNode === null) return true;
    if (leftNode === null || rightNode === null) return false;
    return (leftNode.val === rightNode.val)
        && isMirror(leftNode.left, rightNode.right)
        && isMirror(rightNode.left, leftNode.right);
}