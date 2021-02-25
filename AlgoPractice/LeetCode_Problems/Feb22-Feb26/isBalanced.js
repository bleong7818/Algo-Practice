var isBalanced = function (root) {
    let maxHeightDiff = 0;

    getHeightDiff(root);

    return maxHeightDiff <= 1;

    function getHeightDiff(node) {

        if (node === null) return 0;

        const leftHeight = getHeightDiff(node.left);
        const rightHeight = getHeightDiff(node.right);

        maxHeightDiff = Math.max(maxHeightDiff, Math.abs(rightHeight - leftHeight));

        return Math.max(leftHeight, rightHeight) + 1;
    }
};