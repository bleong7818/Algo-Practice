var lowestCommonAncestor = function (root, p, q) {
    let result = null;

    function helper(node, p, q) {
        if (!node) return false;

        let left = helper(node.left, p, q);
        let right = helper(node.right, p, q);

        if (
            (left && right) ||
            (left && (node.val === q.val || node.val === p.val)) ||
            (right && (node.val === q.val || node.val === p.val))
        ) {
            result = node;
            return true;
        }

        if (node.val === p.val || node.val === q.val) return true;
        if (left || right) return true;
    }
    helper(root, p, q);
    return result;
};