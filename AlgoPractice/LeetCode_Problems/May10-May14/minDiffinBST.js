var minDiffInBST = function (root) {
    let nums = [];

    function traverse(node) {
        if (!node) return;
        if (node.left) traverse(node.left);
        nums.push(node.val);
        if (node.right) traverse(node.right);
    }

    traverse(root);
    let min = nums[1] - nums[0];
    for (let i = 1; i < nums.length - 1; i++) {
        min = Math.min(min, nums[i + 1] - nums[i]);
    }
    return min;
};