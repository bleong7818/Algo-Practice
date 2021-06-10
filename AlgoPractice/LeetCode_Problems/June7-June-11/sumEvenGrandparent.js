var sumEvenGrandparent = function (root) {
    let sum = 0;

    dfs(root, 1, 1);
    return sum;

    function dfs(root, parent, grandparent) {
        if (!root) {
            return;
        }

        if (grandparent % 2 === 0) {
            sum += root.val;
        }

        dfs(root.left, root.val, parent);
        dfs(root.right, root.val, parent);
    }
};