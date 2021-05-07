var sumNumbers = function (root) {
    return sumHelper(root, 0);
};

function sumHelper(node, sum) {
    if (!node) return 0;
    const newSum = sum * 10 + node.val;
    if (!node.left && !node.right) return newSum;
    return sumHelper(node.left, newSum) + sumHelper(node.right, newSum);
}