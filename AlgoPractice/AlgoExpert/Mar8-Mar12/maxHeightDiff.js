function heightBalancedBinaryTree(tree) {
    let maxHeightDiff = 0;

    getHeightDiff(tree);

    return maxHeightDiff <= 1;

    function getHeightDiff(node) {
        if (node === null) return 0;

        const leftHeight = getHeightDiff(node.left);
        const rightHeight = getHeightDiff(node.right);

        maxHeightDiff = Math.max(maxHeightDiff, Math.abs(leftHeight - rightHeight));

        return Math.max(leftHeight, rightHeight) + 1;
    }
}