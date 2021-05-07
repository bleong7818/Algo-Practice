var maxDepth = function (root) {
    let maxDepth = 0;

    function dfs(root, depth) {
        if (!root) {
            maxDepth = Math.max(maxDepth, depth);
            return;
        }

        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    dfs(root, 0);
    return maxDepth;
};