var largestValues = function (root) {
    const result = [];

    function callDFS(node, level) {
        if (!node) return;
        if (result.length === level) result.push(node.val);
        else (result[level] = Math.max(node.val, result[level]));
        if (node.right) callDFS(node.right, level + 1);
        if (node.left) callDFS(node.left, level + 1);
    }
    callDFS(root, 0);
    return result;
};