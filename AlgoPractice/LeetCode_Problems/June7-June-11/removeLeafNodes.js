var removeLeafNodes = function (root, target) {
    let removeRoot = dfs(root, target);

    if (removeRoot) {
        return null;
    }

    return root;
};

function dfs(root, target) {
    if (!root) {
        return;
    }

    if (!root.left && !root.right && root.val === target) {
        return true;
    }

    let left = dfs(root.left, target);
    let right = dfs(root.right, target);

    if (left) {
        root.left = null;
    }

    if (right) {
        root.right = null;
    }

    if (!root.left && !root.right && root.val === target) {
        return true;
    }
}