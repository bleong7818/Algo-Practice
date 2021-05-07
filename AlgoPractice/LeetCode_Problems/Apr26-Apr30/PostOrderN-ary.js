var postorder = function (root) {
    let result = [];

    function traversal(node) {
        if (!node) return node;
        if (node.children) {
            let length = node.children.length;
            for (let i = 0; i < length; i++) {
                traversal(node.children[i]);
            }
        }
        result.push(node.val);
    }
    traversal(root);
    return result;
};