var isUnivalTree = function (root) {
    let value = root.val;
    let isUni = true;

    function traversal(node) {
        if (!node) return;
        if (node.val !== value) {
            isUni = false;
        };
        traversal(node.right);
        traversal(node.left);
    }
    traversal(root);
    return isUni;
};