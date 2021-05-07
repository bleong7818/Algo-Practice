var preorderTraversal = function (root) {
    const result = [];

    function traverse(node) {
        if (!node) return null;

        result.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }

    traverse(root);
    return result;
};