var sumOfLeftLeaves = function (root, isLeft) {
    if (!root) return 0;

    if (isLeft && !root.left && !root.right) {
        return root.val;
    }

    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
};