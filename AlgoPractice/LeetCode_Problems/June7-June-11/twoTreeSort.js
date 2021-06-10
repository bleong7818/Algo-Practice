var getAllElements = function (root1, root2) {
    let values = [];

    function dfs(root) {
        if (!root) {
            return;
        }

        if (root.left) dfs(root.left);
        values.push(root.val);
        if (root.right) dfs(root.right);
    }

    dfs(root1);
    dfs(root2);

    return values.sort((a, b) => a - b);
};