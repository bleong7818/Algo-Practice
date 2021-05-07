var preorder = function (root) {
    let results = [];

    function traversal(node) {
        if (!node) return node;
        results.push(node.val);
        if (node.children) {
            let length = node.children.length;
            for (let i = 0; i < length; i++) {
                traversal(node.children[i]);
            }
        }
    }
    traversal(root);
    return results;
};