var rightSideView = function (root, depth = 0, result = []) {
    if (!root) return result;
    result[depth] = root.val;

    if (root.left) rightSideView(root.left, depth + 1, result);
    if (root.right) rightSideView(root.right, depth + 1, result);

    return result;
};