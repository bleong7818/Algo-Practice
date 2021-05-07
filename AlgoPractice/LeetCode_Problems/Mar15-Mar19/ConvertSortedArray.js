var sortedArrayToBST = function (nums) {
    return createBST(nums);
};

function createBST(nums) {
    if (nums.length === 0) return null;
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);
    root.left = createBST(nums.slice(0, mid));
    root.right = createBST(nums.slice(mid + 1));
    return root;
}