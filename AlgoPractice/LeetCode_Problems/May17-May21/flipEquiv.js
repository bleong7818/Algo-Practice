var flipEquiv = function (root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    let regular = root1.val === root2.val && flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    let flipped = root1.val === root2.val && flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
    return regular || flipped;
};