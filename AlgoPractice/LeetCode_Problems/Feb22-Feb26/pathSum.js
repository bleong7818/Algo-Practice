var hasPathSum = function (node, targetSum, currentSum = 0) {
    if (!node) return false;
    currentSum += node.val;
    if (!node.left && !node.right) return currentSum === targetSum;
    return (hasPathSum(node.left, targetSum, currentSum) ||
        hasPathSum(node.right, targetSum, currentSum));
};