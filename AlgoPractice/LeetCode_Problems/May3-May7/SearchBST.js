var searchBST = function (root, val) {
    let results = [];

    function traversal(node) {
        if (!node) return;
        if (node.val === val) newTraverse(node);
        if (node.right) traversal(node.right);
        if (node.left) traversal(node.left);
    }

    function newTraverse(root) {
        if (!root) return;
        results.push(root.val);
        if (root.right) newTraverse(root.right);
        if (root.left) newTraverse(root.left);
    }
    traversal(root);
    return results;
};