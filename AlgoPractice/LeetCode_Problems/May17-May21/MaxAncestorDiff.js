var maxAncestorDiff = function (root) {

    function traverse(node, max, min) {
        if (!node) return max - min;

        max = Math.max(max, node.val);
        min = Math.min(min, node.val);

        return Math.max(
            traverse(node.left, max, min),
            traverse(node.right, max, min)
        );
    }
    return traverse(root, root.val, root.val);
};
// hi