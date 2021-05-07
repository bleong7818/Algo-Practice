var findMode = function (root) {
    let ans = [];
    let count = 0; _max = 0; prev = 0;

    const preorder = (root) => {
        if (!root) return;

        preorder(root.left);

        count = prev === root.val ? ++count : 1;

        if (count > _max) {
            ans = [root.val];
            _max = count;
        }
        else if (count === _max) {
            ans.push(root.val);
        }
        prev = root.val;

        preorder(root.right);
    }
    preorder(root);
    return ans;
};